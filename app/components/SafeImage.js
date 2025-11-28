'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function SafeImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false 
}) {
  const [error, setError] = useState(false);

  // If no image or error, show placeholder
  if (!src || error) {
    return (
      <div className={`image-placeholder ${className}`}>
        <span className="placeholder-icon">📰</span>
        <span className="placeholder-text">छवि उपलब्ध नहीं</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}