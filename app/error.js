'use client';

export default function Error({ error, reset }) {
  return (
    <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ color: '#e31e24', fontSize: '48px', marginBottom: '20px' }}>⚠️</h1>
      <h2>कुछ गलत हो गया!</h2>
      <p style={{ margin: '20px 0', color: '#666' }}>
        {error.message || 'एक त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें।'}
      </p>
      <button 
        onClick={reset}
        className="btn-load-more"
        style={{ marginTop: '20px' }}
      >
        पुनः प्रयास करें
      </button>
    </div>
  );
}