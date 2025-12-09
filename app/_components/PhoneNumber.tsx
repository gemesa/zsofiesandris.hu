'use client';
import { useState } from 'react';

export default function PhoneNumber({ name, number }: { name: string; number: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <p className="text-lg font-medium italic font-libre">
      {name}:{' '}
      {revealed ? (
        <a href={`tel:${number}`} className="underline">
          {number}
        </a>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="text-camouflage-green underline hover:text-kombu-green transition-colors cursor-pointer"
        >
          Telefonszám megjelenítése
        </button>
      )}
    </p>
  );
}
