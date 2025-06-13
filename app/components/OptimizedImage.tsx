'use client';
import { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  title?: string;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 80,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  title,
  loading
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  
  // Generate WebP and fallback paths
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp').replace('/public/', '/webp/');
  const optimizedSrc = src.replace(/\.(png)$/i, '.jpg').replace('/public/', '/optimized/');
  
  // Fallback to original if optimized versions don't exist
  const fallbackSrc = imageError ? src : optimizedSrc;

  return (
    <picture className={className}>
      {/* WebP for modern browsers */}
      <source 
        srcSet={webpSrc} 
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Optimized JPEG fallback */}
      <source 
        srcSet={optimizedSrc} 
        type="image/jpeg"
        sizes={sizes}
      />
      
      {/* Next.js Image component with fallback */}
      <Image
        src={fallbackSrc}
        alt={alt}
        title={title || alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        sizes={sizes}
        className="w-full h-auto object-cover"
        onError={() => setImageError(true)}
        loading={loading || (priority ? 'eager' : 'lazy')}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </picture>
  );
}