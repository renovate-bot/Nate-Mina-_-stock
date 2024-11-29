import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Props {
  onSearch: (symbol: string) => void;
}

export function SymbolSearch({ onSearch }: Props) {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symbol.trim()) {
      onSearch(symbol.toUpperCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol..."
        className="w-full px-4 py-2 pl-10 bg-[#252525] text-white rounded-md
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
    </form>
  );
}