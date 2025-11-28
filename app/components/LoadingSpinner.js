export default function LoadingSpinner({ text = 'लोड हो रहा है...' }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">{text}</p>
    </div>
  );
}