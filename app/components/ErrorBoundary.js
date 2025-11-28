'use client';
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-content">
            <h1>⚠️ कुछ गलत हो गया</h1>
            <p>क्षमा करें, इस पेज को लोड करने में त्रुटि हुई है।</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-load-more"
            >
              पेज रीलोड करें
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;