'use client'

import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function BackLink() {
  const router = useRouter();

  const handleBack = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.back();
  };

  return (
    <a className="inline-block text-pink-700 mb-4" href="#" onClick={handleBack}>
      Go Back
    </a>
  );
};
