import React from 'react';
import { Header } from './components/Header';
import { GameCard } from './components/GameCard';
import { AIAssistant } from './components/AIAssistant';

const SAMPLE_GAMES = [
  {
    id: '1',
    title: 'The Legend of Adventure',
    genre: 'RPG',
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    description: 'Un RPG épique avec des graphismes magnifiques et une histoire immersive.'
  },
  {
    id: '2',
    title: 'Space Warriors',
    genre: 'FPS',
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80',
    description: 'Un shooter spatial avec des combats intenses et des graphismes futuristes.'
  },
  {
    id: '3',
    title: 'Strategy Masters',
    genre: 'Stratégie',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    description: 'Un jeu de stratégie complexe qui mettra vos compétences tactiques à l\'épreuve.'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>

      <AIAssistant />
    </div>
  );
}

export default App;