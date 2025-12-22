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

const API_BASE_URL = 'http://cms.wyomingchemical.com/wp-json/wp/v2';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching from:', `${API_BASE_URL}/posts?_embed&per_page=20&status=publish`);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(`${API_BASE_URL}/posts?_embed&per_page=20&status=publish`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Wyoming-Chemicals-Next-App/1.0',
      },
      signal: controller.signal,
      cache: 'no-store'
    });
    
    clearTimeout(timeoutId);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WordPress API error: ${response.status} ${response.statusText}`, errorText);
      return [];
    }
    
    const posts: WordPressPost[] = await response.json();
    console.log('Fetched posts count:', posts.length);
    
    if (!Array.isArray(posts)) {
      console.error('Invalid response format from WordPress API');
      return [];
    }
    
    return posts.map(transformWordPressPost).filter(Boolean);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    console.log('Fetching post:', slug);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(`${API_BASE_URL}/posts?slug=${encodeURIComponent(slug)}&_embed&status=publish`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Wyoming-Chemicals-Next-App/1.0',
      },
      signal: controller.signal,
      cache: 'no-store'
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      console.error(`WordPress API error: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const posts: WordPressPost[] = await response.json();
    
    if (!Array.isArray(posts) || posts.length === 0) {
      console.log('No post found with slug:', slug);
      return null;
    }
    
    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.error('Error fetching blog post:', error);
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
    
    // Get featured image
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const featuredImage = featuredMedia?.media_details?.sizes?.large?.source_url || 
                         featuredMedia?.media_details?.sizes?.medium?.source_url || 
                         featuredMedia?.source_url;
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
    
    return {
      id: post.slug,
      title: post.title?.rendered || 'Untitled',
      excerpt: cleanExcerpt,
      content: post.content?.rendered || '',
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