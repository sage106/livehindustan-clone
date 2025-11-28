import { newsData } from '../lib/data';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Add metadata for SEO
export const metadata = {
  title: 'लाइव हिन्दुस्तान - ताज़ा खबरें, ब्रेकिंग न्यूज़ | Hindi News',
  description: 'लाइव हिन्दुस्तान पर पढ़ें ताज़ा हिंदी समाचार - देश, दुनिया, राजनीति, खेल, मनोरंजन, बिजनेस की खबरें',
  keywords: 'hindi news, भारत समाचार, ताज़ा खबरें, breaking news, sports news, politics',
  openGraph: {
    title: 'लाइव हिन्दुस्तान - Latest Hindi News',
    description: 'भारत की सबसे तेज़ हिंदी न्यूज़ वेबसाइट',
    images: ['https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1200&h=630'],
  },
};

// Server-side data fetching
async function getNewsData() {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // In production, this would be:
  // const response = await fetch('https://api.example.com/news');
  // const data = await response.json();
  
  return newsData;
}

export default async function Home() {
  // Fetch data on the server
  const data = await getNewsData();
  
  return (
    <>
      <Header />
      <BreakingNews news={data.breaking} />
      
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            <div>
              <HeroSection data={data.hero} />
              <CategorySection title="देश" news={data.categories.देश} />
              <CategorySection title="राजनीति" news={data.categories.राजनीति} />
              <CategorySection title="खेल" news={data.categories.खेल} />
              <CategorySection title="मनोरंजन" news={data.categories.मनोरंजन} />
            </div>
            
            <Sidebar trending={data.trending} />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}