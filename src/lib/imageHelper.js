export const getImageUrl = (url) => {
  if (!url) return '';
  // If URL already has http/https, use it directly (WordPress/Cloudinary)
  if (url.startsWith('http')) {
    return url;
  }
  // Otherwise, return local file path directly
  return url;
};