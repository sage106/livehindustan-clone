import Link from 'next/link';

export default function NoData({ 
  title = 'कोई डेटा उपलब्ध नहीं', 
  message = 'क्षमा करें, इस समय कोई खबर उपलब्ध नहीं है।',
  showHomeButton = true 
}) {
  return (
    <div className="no-data-container">
      <div className="no-data-content">
        <div className="no-data-icon">📰</div>
        <h2 className="no-data-title">{title}</h2>
        <p className="no-data-message">{message}</p>
        {showHomeButton && (
          <Link href="/">
            <button className="btn-load-more">
              होम पर वापस जाएं
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}