import SafeImage from './SafeImage';

export default function HeroSection({ data }) {
  if (!data || !data.main) {
    return (
      <section className="hero-section">
        <div className="no-data-container">
          <p>मुख्य समाचार लोड नहीं हो सका।</p>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-main">
          {data.main.image ? (
            <>
              <SafeImage
                src={data.main.image}
                alt={data.main.title}
                width={800}
                height={450}
                priority
                className="hero-main-img"
              />
              <div className="hero-overlay">
                <span className="category-badge">{data.main.category}</span>
                <h2 className="hero-title">{data.main.title}</h2>
                <p className="hero-description">{data.main.description}</p>
                <span className="news-time">{data.main.time}</span>
              </div>
            </>
          ) : (
            <div className="hero-placeholder">
              <span className="placeholder-icon">📰</span>
              <div style={{ color: '#666', marginTop: '20px', padding: '20px' }}>
                <span className="category-badge">{data.main.category}</span>
                <h2 className="hero-title" style={{ color: '#333', marginTop: '15px' }}>
                  {data.main.title}
                </h2>
                <p style={{ marginTop: '10px' }}>{data.main.description}</p>
              </div>
            </div>
          )}
        </div>

        <div className="hero-side">
          {data.side && data.side.length > 0 ? (
            data.side.map((item) => (
              <div key={item.id} className="side-card">
                <div className="side-card-content">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    width={140}
                    height={120}
                    className="side-card-img"
                  />
                  <div className="side-card-text">
                    <span className="category-badge">{item.category}</span>
                    <h3 className="side-card-title">{item.title}</h3>
                    <span className="news-time">{item.time}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-news-box">
              <p>अन्य खबरें उपलब्ध नहीं हैं।</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}