import axios from 'axios';

export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  categories: number[];
  tags: number[];
  featured_media: number;
  _embedded?: {
    author: Array<{
      name: string;
    }>;
    'wp:term': Array<Array<{
      name: string;
      taxonomy: string;
    }>>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details: {
        sizes: {
          medium?: { source_url: string };
          large?: { source_url: string };
          full: { source_url: string };
        };
      };
    }>;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
  featuredImage?: string;
  featuredImageAlt?: string;
}

const API_BASE_URL = process.env.WORDPRESS_API_URL || 'https://cms.wyomingchemical.com/wp-json/wp/v2';
const WORDPRESS_BASE_URL = process.env.WORDPRESS_BASE_URL || 'https://cms.wyomingchemical.com';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching from:', `${API_BASE_URL}/posts`);
    
    const response = await axios.get(`${API_BASE_URL}/posts`, {
      params: {
        _embed: true,
        per_page: 20,
        status: 'publish'
      },
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Wyoming-Chemicals-Next-App/1.0',
      },
      timeout: 5000
    });
    
    const posts: WordPressPost[] = response.data;
    console.log('Fetched posts count:', posts.length);
    
    if (!Array.isArray(posts)) {
      console.error('Invalid response format from WordPress API');
      return [];
    }
    
    return posts.map(transformWordPressPost).filter(Boolean);
  } catch (error) {
    console.error('WordPress API unavailable:', error.message);
    return [];
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    console.log('Fetching post:', slug);
    
    const response = await axios.get(`${API_BASE_URL}/posts`, {
      params: {
        slug: slug,
        _embed: true,
        status: 'publish'
      },
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Wyoming-Chemicals-Next-App/1.0',
      },
      timeout: 5000
    });
    
    const posts: WordPressPost[] = response.data;
    
    if (!Array.isArray(posts) || posts.length === 0) {
      console.log('No post found with slug:', slug);
      return null;
    }
    
    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.error('WordPress API unavailable:', error.message);
    return null;
  }
}



function transformWordPressPost(post: WordPressPost): BlogPost {
  try {
    const author = post._embedded?.author?.[0]?.name || 'Wyoming Chemicals Distribution Team';
    const categories = post._embedded?.['wp:term']?.[0] || [];
    const tags = post._embedded?.['wp:term']?.[1] || [];
    
    const category = categories.find(term => term.taxonomy === 'category')?.name || 'Industry Insights';
    const postTags = tags.filter(term => term.taxonomy === 'post_tag').map(tag => tag.name);
    
    // Get featured image with better URL handling
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    let featuredImage = featuredMedia?.media_details?.sizes?.large?.source_url || 
                       featuredMedia?.media_details?.sizes?.medium?.source_url || 
                       featuredMedia?.source_url;
    
    // Ensure proper URL format
    if (featuredImage) {
      // If URL is relative, make it absolute
      if (!featuredImage.startsWith('http')) {
        featuredImage = `${WORDPRESS_BASE_URL}${featuredImage.startsWith('/') ? '' : '/'}${featuredImage}`;
      }
      // Replace http with https if needed for production
      if (process.env.NODE_ENV === 'production' && featuredImage.startsWith('http://')) {
        featuredImage = featuredImage.replace('http://', 'https://');
      }
    }
    
    const featuredImageAlt = featuredMedia?.alt_text || post.title?.rendered || '';
    
    // Calculate read time (rough estimate: 200 words per minute)
    const contentText = post.content?.rendered?.replace(/<[^>]*>/g, '') || '';
    const wordCount = contentText.split(/\s+/).filter(word => word.length > 0).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    
    // Format date
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Clean excerpt
    const cleanExcerpt = post.excerpt?.rendered?.replace(/<[^>]*>/g, '').replace(/\[&hellip;\]/, '...').trim() || '';
    
    // Fix content images URLs
    let cleanContent = post.content?.rendered || '';
    if (cleanContent) {
      // Fix relative image URLs in content
      cleanContent = cleanContent.replace(
        /src="(?!\/\/|http)([^"]*)"/g,
        `src="${WORDPRESS_BASE_URL}$1"`
      );
      // Replace http with https for production
      if (process.env.NODE_ENV === 'production') {
        cleanContent = cleanContent.replace(
          new RegExp(`src="${WORDPRESS_BASE_URL.replace('http://', 'http:\\/\\/')}`,'g'),
          `src="${WORDPRESS_BASE_URL.replace('http://', 'https://')}`
        );
      }
    }
    
    return {
      id: post.slug,
      title: post.title?.rendered || 'Untitled',
      excerpt: cleanExcerpt,
      content: cleanContent,
      author,
      date: formattedDate,
      readTime: `${readTime} min read`,
      category,
      tags: postTags,
      slug: post.slug,
      featuredImage,
      featuredImageAlt
    };
  } catch (error) {
    console.error('Error transforming WordPress post:', error);
    return {
      id: post.slug || 'unknown',
      title: 'Error Loading Post',
      excerpt: 'This post could not be loaded properly.',
      content: '',
      author: 'Wyoming Chemicals Distribution Team',
      date: new Date().toLocaleDateString('en-US'),
      readTime: '1 min read',
      category: 'Industry Insights',
      tags: [],
      slug: post.slug || 'unknown'
    };
  }
}