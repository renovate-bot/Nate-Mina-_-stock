import React from 'react';
import { TimeFrame } from '../../types/stock';

interface Props {
  selected: TimeFrame;
  onChange: (timeframe: TimeFrame) => void;
}

export function TimeframeSelector({ selected, onChange }: Props) {
  const timeframes: TimeFrame[] = ['1D', '1W', '1M', '3M', '1Y', '5Y'];

  return (
    <div className="flex space-x-2">
      {timeframes.map((tf) => (
        <button
          key={tf}
          onClick={() => onChange(tf)}
          className={`px-3 py-1 rounded ${
            selected === tf
              ? 'bg-blue-600 text-white'
              : 'bg-[#252525] text-gray-300 hover:bg-[#303030]'
          }`}
        >
          {tf}
        </button>
      ))}
    </div>
  );
}