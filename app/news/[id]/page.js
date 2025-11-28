import { newsData } from '../../../lib/data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SafeImage from '../../components/SafeImage';
import Link from 'next/link';
import NoData from '../../components/NoData';

// Get all article IDs for static generation
export async function generateStaticParams() {
  const allNews = [];
  
  Object.values(newsData.categories).forEach(category => {
    allNews.push(...category);
  });
  
  return allNews.map((news) => ({
    id: news.id.toString(),
  }));
}

// Fetch article data
async function getArticle(id) {
  try {
    // Search through all categories
    for (const category of Object.values(newsData.categories)) {
      const article = category.find(item => item.id.toString() === id);
      if (article) return article;
    }
    
    // Check hero section
    if (newsData.hero.main.id.toString() === id) {
      return newsData.hero.main;
    }
    
    for (const item of newsData.hero.side) {
      if (item.id.toString() === id) return item;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const article = await getArticle(params.id);
    
    if (!article) {
      return {
        title: 'लेख नहीं मिला - लाइव हिन्दुस्तान',
      };
    }
    
    return {
      title: `${article.title} - लाइव हिन्दुस्तान`,
      description: article.description || article.title,
      openGraph: {
        title: article.title,
        description: article.description || article.title,
        images: article.image ? [article.image] : [],
      },
    };
  } catch (error) {
    return {
      title: 'त्रुटि - लाइव हिन्दुस्तान',
    };
  }
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.id);
  
  // Handle article not found
  if (!article) {
    return (
      <>
        <Header />
        <NoData 
          title="लेख नहीं मिला"
          message="क्षमा करें, यह लेख उपलब्ध नहीं है या हटा दिया गया है।"
          showHomeButton={true}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <article className="article-page">
        <div className="container">
          <div className="article-container">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
              <Link href="/">होम</Link>
              <span> / </span>
              <span className="category-badge">{article.category}</span>
              <span> / </span>
              <span>लेख</span>
            </nav>

            {/* Article Header */}
            <header className="article-header">
              <h1 className="article-title">{article.title}</h1>
              <div className="article-meta">
                <span className="category-badge">{article.category}</span>
                <span className="article-time">{article.time || 'समय उपलब्ध नहीं'}</span>
                {article.author && <span className="article-author">{article.author}</span>}
              </div>
            </header>

            {/* Featured Image */}
            <div className="article-image">
              <SafeImage
                src={article.image}
                alt={article.title}
                width={1200}
                height={600}
                priority
                className="article-img"
              />
            </div>

            {/* Article Content */}
            <div className="article-content">
              {article.description && (
                <p className="article-lead">{article.description}</p>
              )}
              
              <p>
                यह एक डेमो समाचार लेख है जो Next.js की डायनामिक रूटिंग क्षमताओं को प्रदर्शित करता है। 
                वास्तविक परिदृश्य में, यह सामग्री एक API या CMS से आएगी।
              </p>

              <h2>मुख्य बिंदु</h2>
              <ul>
                <li>Next.js में डायनामिक रूटिंग का उपयोग किया गया है</li>
                <li>SEO के लिए मेटाडेटा जोड़ा गया है</li>
                <li>Image component का उपयोग करके images को optimize किया गया है</li>
                <li>Server-side rendering के साथ बेहतर performance</li>
                <li>एरर हैंडलिंग और एज केस मैनेजमेंट</li>
              </ul>

              <p>
                लाइव हिन्दुस्तान भारत की अग्रणी हिंदी समाचार वेबसाइट है। हम आपको देश-विदेश की ताज़ा खबरें, 
                राजनीति, खेल, मनोरंजन, बिज़नेस और लाइफस्टाइल से जुड़ी हर जानकारी प्रदान करते हैं।
              </p>

              <h2>विस्तृत जानकारी</h2>
              <p>
                यह लेख Next.js 14 के App Router का उपयोग करके बनाया गया है, जो modern web development 
                के best practices को follow करता है। डायनामिक रूटिंग के माध्यम से प्रत्येक समाचार लेख का 
                अपना यूनिक URL होता है।
              </p>
              
              <p>
                हमारी वेबसाइट पर आप देश और दुनिया की सभी महत्वपूर्ण खबरें हिंदी में पढ़ सकते हैं। 
                हम 24x7 आपको ताज़ा अपडेट प्रदान करते हैं।
              </p>
            </div>

            {/* Share Buttons */}
            <div className="article-share">
              <h3>इस लेख को शेयर करें:</h3>
              <div className="share-buttons">
                <button className="share-btn facebook">Facebook</button>
                <button className="share-btn twitter">Twitter</button>
                <button className="share-btn whatsapp">WhatsApp</button>
                <button className="share-btn copy">Link Copy</button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="related-articles">
              <h2>संबंधित खबरें</h2>
              
              {newsData.categories[article.category] && 
               newsData.categories[article.category].filter(item => item.id !== article.id).length > 0 ? (
                <div className="related-grid">
                  {newsData.categories[article.category]
                    .filter(item => item.id !== article.id)
                    .slice(0, 3)
                    .map((relatedArticle) => (
                      <Link href={`/news/${relatedArticle.id}`} key={relatedArticle.id}>
                        <div className="related-card">
                          <SafeImage
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            width={300}
                            height={200}
                          />
                          <h4>{relatedArticle.title}</h4>
                        </div>
                      </Link>
                    ))}
                </div>
              ) : (
                <div className="no-news-box">
                  <p>कोई संबंधित खबर उपलब्ध नहीं है।</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </>
  );
}