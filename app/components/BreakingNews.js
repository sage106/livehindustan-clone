'use client';
import { useState, useEffect } from 'react';

export default function BreakingNews({ news }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className="breaking-news">
      <div className="container">
        <div className="breaking-news-content">
          <div className="breaking-badge">
            ⚡ ब्रेकिंग न्यूज़
          </div>
          <div className="breaking-text">
            <a href="#">{news[currentIndex]}</a>
          </div>
        </div>
      </div>
    </div>
  );
}