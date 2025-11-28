import { newsData } from '@/lib/data';

export default function sitemap() {
  const baseUrl = 'https://www.livehindustan.com';
  
  // Get all news articles
  const allNews = [];
  Object.values(newsData.categories).forEach(category => {
    allNews.push(...category);
  });
  
  // Create news URLs
  const newsUrls = allNews.map((news) => ({
    url: `${baseUrl}/news/${news.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));
  
  // Static pages
  const routes = ['', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.5,
  }));
  
  return [...routes, ...newsUrls];
}