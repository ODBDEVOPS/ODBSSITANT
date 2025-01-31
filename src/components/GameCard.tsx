import React from 'react';
import { Heart, MessageSquare, Share2 } from 'lucide-react';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={game.imageUrl}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{game.description}</p>
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
            {game.genre}
          </span>
          <div className="flex space-x-3">
            <button className="text-gray-500 hover:text-red-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              <MessageSquare className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-green-500">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}