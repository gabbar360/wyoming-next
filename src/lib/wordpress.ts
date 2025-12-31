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

const API_BASE_URL = process.env.WORDPRESS_API_URL || 'http://cms.wyomingchemical.com/wp-json/wp/v2';
const WORDPRESS_BASE_URL = process.env.WORDPRESS_BASE_URL || 'http://cms.wyomingchemical.com';

// Image validation function
export async function validateImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD', timeout: 3000 });
    const isValid = response.ok && response.headers.get('content-type')?.startsWith('image/');
    console.log(`[Image Validation] ${url} - ${isValid ? 'Valid' : 'Invalid'}`);
    return isValid;
  } catch (error) {
    console.error(`[Image Validation] Failed to validate ${url}:`, error);
    return false;
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('[API] Fetching from:', `${API_BASE_URL}/posts`);
    console.log('[API] WordPress Base URL:', WORDPRESS_BASE_URL);
    console.log('[API] Environment:', process.env.NODE_ENV);
    
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
      timeout: 10000
    });
    
    console.log('[API] Response status:', response.status);
    console.log('[API] Response headers:', response.headers);
    
    const posts: WordPressPost[] = response.data;
    console.log('[API] Fetched posts count:', posts.length);
    
    if (!Array.isArray(posts)) {
      console.error('[API] Invalid response format from WordPress API');
      return [];
    }
    
    const transformedPosts = posts.map(transformWordPressPost).filter(Boolean);
    console.log('[API] Successfully transformed posts:', transformedPosts.length);
    
    return transformedPosts;
  } catch (error: any) {
    console.error('[API] WordPress API Error Details:');
    console.error('- Message:', error.message);
    console.error('- Code:', error.code);
    console.error('- Response Status:', error.response?.status);
    console.error('- Response Data:', error.response?.data);
    console.error('- Config URL:', error.config?.url);
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
    
    // Get featured image with detailed error handling
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    let featuredImage: string | undefined;
    
    console.log(`[Image Debug] Post: ${post.title?.rendered}`);
    console.log(`[Image Debug] Featured Media ID: ${post.featured_media}`);
    console.log(`[Image Debug] Featured Media Object:`, featuredMedia);
    
    if (!featuredMedia) {
      console.warn(`[Image Error] No featured media found for post: ${post.title?.rendered}`);
    } else {
      // Try different image sizes
      const largeImage = featuredMedia?.media_details?.sizes?.large?.source_url;
      const mediumImage = featuredMedia?.media_details?.sizes?.medium?.source_url;
      const fullImage = featuredMedia?.source_url;
      
      console.log(`[Image Debug] Available sizes:`, {
        large: largeImage,
        medium: mediumImage,
        full: fullImage
      });
      
      featuredImage = largeImage || mediumImage || fullImage;
      
      if (!featuredImage) {
        console.error(`[Image Error] No valid image URL found in media object for post: ${post.title?.rendered}`);
      } else {
        console.log(`[Image Debug] Selected image URL: ${featuredImage}`);
        
        // Ensure proper URL format
        if (!featuredImage.startsWith('http')) {
          const originalUrl = featuredImage;
          featuredImage = `${WORDPRESS_BASE_URL}${featuredImage.startsWith('/') ? '' : '/'}${featuredImage}`;
          console.log(`[Image Debug] Fixed relative URL: ${originalUrl} -> ${featuredImage}`);
        }
        
        // Convert to HTTPS only in production environment
        if (process.env.NODE_ENV === 'production' && featuredImage.startsWith('http://')) {
          const originalUrl = featuredImage;
          featuredImage = featuredImage.replace('http://', 'https://');
          console.log(`[Image Debug] Converted to HTTPS: ${originalUrl} -> ${featuredImage}`);
        }
        
        console.log(`[Image Debug] Final image URL: ${featuredImage}`);
        
        // Validate image URL in development
        if (process.env.NODE_ENV === 'development') {
          validateImageUrl(featuredImage).then(isValid => {
            if (!isValid) {
              console.error(`[Image Error] Featured image URL is not accessible: ${featuredImage}`);
            }
          });
        }
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
    
    // Fix content images URLs with error handling
    let cleanContent = post.content?.rendered || '';
    if (cleanContent) {
      const originalImageMatches = cleanContent.match(/src="[^"]*"/g);
      console.log(`[Content Images] Found ${originalImageMatches?.length || 0} images in content`);
      
      if (originalImageMatches) {
        console.log(`[Content Images] Original URLs:`, originalImageMatches);
      }
      
      // Fix relative image URLs in content
      cleanContent = cleanContent.replace(
        /src="(?!\/\/|http)([^"]*)"/g,
        (match, url) => {
          const fixedUrl = `src="${WORDPRESS_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}"`;
          console.log(`[Content Images] Fixed: ${match} -> ${fixedUrl}`);
          return fixedUrl;
        }
      );
      
      // Convert HTTP to HTTPS only in production
      if (process.env.NODE_ENV === 'production') {
        cleanContent = cleanContent.replace(
          /src="http:\/\/[^"]*"/g,
          (match) => {
            const httpsUrl = match.replace('http://', 'https://');
            console.log(`[Content Images] HTTPS: ${match} -> ${httpsUrl}`);
            return httpsUrl;
          }
        );
      }
      
      const finalImageMatches = cleanContent.match(/src="[^"]*"/g);
      if (finalImageMatches) {
        console.log(`[Content Images] Final URLs:`, finalImageMatches);
      }
    }
    
    const result = {
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
    
    console.log(`[Transform Success] Post: ${result.title}`);
    console.log(`[Transform Success] Featured Image: ${result.featuredImage || 'None'}`);
    
    return result;
  } catch (error: any) {
    console.error('[Transform Error] Error transforming WordPress post:');
    console.error('- Post ID:', post.id);
    console.error('- Post Slug:', post.slug);
    console.error('- Post Title:', post.title?.rendered);
    console.error('- Error Message:', error.message);
    console.error('- Error Stack:', error.stack);
    
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