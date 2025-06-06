'use client';

import { useFavoritosContext } from '@/src/contexts/FavoritosContext';
import { useSession } from 'next-auth/react';
import React from 'react';

interface FavoriteButtonProps {
  esporte: string;
  index: number;
}

const FavoriteButton = ({ esporte, index }: FavoriteButtonProps) => {
  const { data: session } = useSession();
  const { cachedData, addFavorite, removeFavorite } = useFavoritosContext();

  const isFavorite = cachedData?.includes(esporte) ?? false;

  const toggleFavorite = () => {
    if (!session?.user?.email) return;

    if (isFavorite) {
      removeFavorite(esporte);
    } else {
      addFavorite(esporte);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={
        'p-2 focus:outline-none transition-colors duration-200' + (index === 0)
          ? 'forth-step'
          : ''
      }
      aria-label={
        isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFavorite ? '#FFD700' : 'none'}
        stroke={isFavorite ? '#FFD700' : 'currentColor'}
        strokeWidth="2"
        className="w-6 h-6 transition-all duration-300 hover:scale-110"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;
