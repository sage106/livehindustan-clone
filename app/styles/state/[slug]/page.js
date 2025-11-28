import { stateNewsData } from '../../../lib/data';
import { newsData } from '../../../lib/data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategorySection from '../../components/CategorySection';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';

// Generate static params for all states
export async function generateStaticParams() {
  const states = Object.keys(stateNewsData);
  
  return states.map((state) => ({
    slug: state,
  }));
}

// Generate metadata for each state
export async function generateMetadata({ params }) {
  const state = decodeURIComponent(params.slug);
  
  return {
    title: `${state} की खबरें - लाइव हिन्दुस्तान`,
    description: `${state} की ताज़ा खबरें, ब्रेकिंग न्यूज़ और अपडेट`,
    openGraph: {
      title: `${state} समाचार - लाइव हिन्दुस्तान`,
      description: `${state} की सभी ताज़ा खबरें`,
    },
  };
}

async function getStateNews(slug) {
  const state = decodeURIComponent(slug);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const stateNews = stateNewsData[state];
  
  return {
    state,
    news: stateNews || [],
    exists: !!stateNews
  };
}

export default async function StatePage({ params }) {
  const { state, news, exists } = await getStateNews(params.slug);
  
  if (!exists) {
    return (
      <>
        <Header />
        <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h1>राज्य नहीं मिला</h1>
          <p style={{ marginTop: '20px', color: '#666' }}>
            क्षमा करें, इस राज्य की खबरें अभी उपलब्ध नहीं हैं।
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
      
            <div className="category-page-header">
        <div className="container">
          <nav className="breadcrumb" style={{ paddingTop: '20px' }}>
            <Link href="/">होम</Link>
            <span> / </span>
            <span>राज्य</span>
            <span> / </span>
            <span>{state}</span>
          </nav>
          <h1 className="category-page-title">{state}</h1>
          <p className="category-page-subtitle">
            {state} की ताज़ा खबरें और अपडेट
          </p>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            <div>
              <CategorySection 
                title={`${state} की खबरें`} 
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
                    इस राज्य में अभी कोई खबर नहीं है।
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