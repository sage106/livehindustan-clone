import { newsData } from '../../../lib/data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategorySection from '../../components/CategorySection';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = Object.keys(newsData.categories);
  
  return categories.map((category) => ({
    slug: category,
  }));
}

// Generate metadata for each category
export async function generateMetadata({ params }) {
  const category = decodeURIComponent(params.slug);
  
  return {
    title: `${category} - लाइव हिन्दुस्तान`,
    description: `${category} से जुड़ी सभी ताज़ा खबरें और अपडेट`,
    openGraph: {
      title: `${category} समाचार - लाइव हिन्दुस्तान`,
      description: `${category} की ब्रेकिंग न्यूज़ और ताज़ा अपडेट`,
    },
  };
}

async function getCategoryNews(slug) {
  const category = decodeURIComponent(slug);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const categoryNews = newsData.categories[category];
  
  return {
    category,
    news: categoryNews || [],
    exists: !!categoryNews
  };
}

export default async function CategoryPage({ params }) {
  const { category, news, exists } = await getCategoryNews(params.slug);
  
  if (!exists) {
    return (
      <>
        <Header />
        <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h1>श्रेणी नहीं मिली</h1>
          <p style={{ marginTop: '20px', color: '#666' }}>
            क्षमा करें, यह श्रेणी उपलब्ध नहीं है।
          </p>
          <Link href="/">
            <button className="btn-load-more" style={{ marginTop: '20px' }}>
              होम पर वापस जाएं
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Category Header */}
      <div className="category-page-header">
        <div className="container">
          <nav className="breadcrumb" style={{ paddingTop: '20px' }}>
            <Link href="/">होम</Link>
            <span> / </span>
            <span>{category}</span>
          </nav>
          <h1 className="category-page-title">{category}</h1>
          <p className="category-page-subtitle">
            {category} से जुड़ी सभी ताज़ा खबरें और अपडेट
          </p>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            <div>
              <CategorySection 
                title={`${category} की ताज़ा खबरें`} 
                news={news} 
              />
              
              {/* Show message if no news */}
              {news.length === 0 && (
                <div style={{ 
                  padding: '60px 20px', 
                  textAlign: 'center',
                  backgroundColor: 'white',
                  borderRadius: '8px'
                }}>
                  <p style={{ fontSize: '18px', color: '#666' }}>
                    इस श्रेणी में अभी कोई खबर नहीं है।
                  </p>
                </div>
              )}
            </div>
            
            <Sidebar trending={newsData.trending} />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}