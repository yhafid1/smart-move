'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function JPARLogo() {
  const [imageError, setImageError] = useState(false);
  if (imageError) {
    return (
      <div className="bg-white p-2 rounded">
        <span className="text-sm text-neutral-900 font-bold">JPAR® REALTY</span>
      </div>
    );
  }
  return (
    <div className="bg-white p-2 rounded">
      <Image
        src="/jpar-logo.jpg"
        alt="JPAR Realty"
        width={100}
        height={40}
        className="object-contain"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
