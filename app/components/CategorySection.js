import SafeImage from './SafeImage';
import Link from 'next/link';

export default function CategorySection({ title, news }) {
  // Handle empty news array
  if (!news || news.length === 0) {
    return (
      <section className="category-section">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="no-news-box">
          <p>इस श्रेणी में अभी कोई खबर उपलब्ध नहीं है।</p>
        </div>
      </section>
    );
  }

  return (
    <section className="category-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>
      
      <div className="news-grid">
        {news.map((item) => (
          <Link href={`/news/${item.id}`} key={item.id}>
            <div className="news-card">
              <SafeImage
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="news-card-img"
              />
              
              <div className="news-card-content">
                <span className="category-badge">{item.category}</span>
                
                <h3 className="news-card-title" title={item.title}>
                  {item.title}
                </h3>
                
                {item.description && (
                  <p className="news-card-description">{item.description}</p>
                )}
                
                <span className="news-time">{item.time || 'समय उपलब्ध नहीं'}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {news.length > 0 && (
        <div className="load-more">
          <button className="btn-load-more">और देखें</button>
        </div>
      )}
    </section>
  );
}