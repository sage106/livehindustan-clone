import SafeImage from './SafeImage';

export default function Sidebar({ trending }) {
  return (
    <aside className="sidebar">
      {/* Trending Section */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">
          📈 ट्रेंडिंग
        </h3>
        <ul className="trending-list">
          {trending.map((item, index) => (
            <li key={index} className="trending-item">
              <span className="trending-number">{index + 1}</span>
              <span className="trending-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Section */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">
          🎥 वीडियो
        </h3>
        <div className="video-list">
          <div className="video-item">
            <div className="video-thumbnail">
              <SafeImage 
                src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=250&fit=crop"
                alt="Video"
                width={400}
                height={180}
              />
              <div className="play-button">▶</div>
            </div>
            <p className="video-title">PM मोदी का संबोधन: देश के विकास पर जोर</p>
          </div>
          <div className="video-item">
            <div className="video-thumbnail">
              <SafeImage 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop"
                alt="Video"
                width={400}
                height={180}
              />
              <div className="play-button">▶</div>
            </div>
            <p className="video-title">मुंबई में भारी बारिश, जनजीवन प्रभावित</p>
          </div>
        </div>
      </div>

      {/* Advertisement */}
      <div className="sidebar-section ad-box">
        <p>विज्ञापन</p>
      </div>

      {/* Latest Stories */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">
          ⚡ ताज़ा खबरें
        </h3>
        <ul className="latest-stories">
          <li className="latest-story-item">
            <span className="story-time">2 मिनट पहले</span>
            <p className="story-text">भारत ने पाकिस्तान को दिया करारा जवाब</p>
          </li>
          <li className="latest-story-item">
            <span className="story-time">5 मिनट पहले</span>
            <p className="story-text">दिल्ली मेट्रो में बढ़ाई गई सुरक्षा</p>
          </li>
          <li className="latest-story-item">
            <span className="story-time">10 मिनट पहले</span>
            <p className="story-text">आज से बदल गए ये जरूरी नियम</p>
          </li>
          <li className="latest-story-item">
            <span className="story-time">15 मिनट पहले</span>
            <p className="story-text">क्रिकेट: भारत ने जीता पहला वनडे मैच</p>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">
          📱 सोशल मीडिया
        </h3>
        <div className="social-buttons">
          <a href="#" className="social-btn facebook">Facebook</a>
          <a href="#" className="social-btn twitter">Twitter</a>
          <a href="#" className="social-btn instagram">Instagram</a>
          <a href="#" className="social-btn youtube">YouTube</a>
        </div>
      </div>
    </aside>
  );
}