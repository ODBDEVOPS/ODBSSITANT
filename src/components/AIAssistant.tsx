import React, { useState } from 'react';
import { Mic, Send } from 'lucide-react';

export function AIAssistant() {
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Assistant IA</h3>
      </div>
      
      <div className="h-96 p-4 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">
                Bonjour ! Je suis votre assistant gaming. Comment puis-je vous aider aujourd'hui ?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500 hover:text-indigo-600">
            <Mic className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Posez votre question..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}