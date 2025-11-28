import Header from '../components/Header';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection';
import LoadingSpinner from '../components/LoadingSpinner';
import NoData from '../components/NoData';
import SkeletonCard from '../components/SkeletonCard';
import { newsData } from '@/lib/data';

export const metadata = {
  title: 'टेस्ट पेज - एज केस',
};

export default function TestPage() {
  const edgeCaseNews = newsData.categories['टेस्ट-एज-केस'] || [];

  return (
    <>
      <Header />
      
      <main className="main-content">
        <div className="container">
          <h1 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>
            एज केस टेस्टिंग
          </h1>

          {/* Test 1: Long Titles and Missing Images */}
          <CategorySection 
            title="लंबे शीर्षक और छवि के बिना लेख" 
            news={edgeCaseNews}
          />

          {/* Test 2: Empty News Array */}
          <CategorySection 
            title="खाली श्रेणी (कोई खबर नहीं)" 
            news={[]}
          />
                    {/* Test 3: Loading State */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
              लोडिंग स्टेट
            </h2>
            <LoadingSpinner text="डेटा लोड हो रहा है..." />
          </div>

          {/* Test 4: No Data State */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
              नो डेटा स्टेट
            </h2>
            <NoData 
              title="कोई खबर नहीं मिली"
              message="इस समय इस श्रेणी में कोई खबर उपलब्ध नहीं है।"
              showHomeButton={false}
            />
          </div>

          {/* Test 5: Skeleton Loading */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
              स्केलेटन लोडिंग
            </h2>
            <div className="news-grid">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </div>

          {/* Test 6: Error State */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>
              एरर स्टेट
            </h2>
            <div className="error-container">
              <div className="error-content">
                <h1>⚠️</h1>
                <p>डेटा लोड करने में त्रुटि हुई</p>
                <button className="btn-load-more">
                  पुनः प्रयास करें
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}