import React from 'react';
import { Menu, User, Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4" />
            <h1 className="text-xl font-bold">GameAssist AI</h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des jeux, des astuces..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-indigo-500 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6" />
            <User className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
}