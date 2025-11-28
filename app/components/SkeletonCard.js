export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div style={{ padding: '20px' }}>
        <div className="skeleton skeleton-text" style={{ width: '30%', marginBottom: '15px' }}></div>
        <div className="skeleton skeleton-text" style={{ marginBottom: '10px' }}></div>
        <div className="skeleton skeleton-text skeleton-text-short" style={{ marginBottom: '10px' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
      </div>
    </div>
  );
}