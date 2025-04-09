'use client';

import { useState } from 'react';

export default function Home() {
  const [decision1, setDecision1] = useState('');
  const [decision2, setDecision2] = useState('');
  const [result, setResult] = useState('');
  const [isFlipping, setIsFlipping] = useState(false);
  const [showCoin, setShowCoin] = useState(false);
  const [error, setError] = useState('');

  const flipCoin = () => {
    if (!decision1 || !decision2) {
      setError('Please enter both decisions.');
      return;
    }

    setError('');
    setResult('');
    setIsFlipping(true);
    setShowCoin(true);

    setTimeout(() => {
      const random = Math.random();
      const chosen = random < 0.5 ? decision1 : decision2;
      setResult(chosen);
      setIsFlipping(false);
      setShowCoin(false);
    }, 2000);
  };

  const reset = () => {
    setDecision1('');
    setDecision2('');
    setResult('');
    setError('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      {(showCoin || result) && (
        <div className="flex justify-center mt-4">
          <div
            className={`coin w-24 h-24 bg-yellow-400 rounded-full border-4 border-yellow-600 shadow-lg flex items-center justify-center transition-all duration-500 ${
              showCoin ? 'animate-flip' : ''
            }`}
          >
            {result && (
              <span className="text-white text-lg font-semibold text-center">{result}</span>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 w-full max-w-md">
        {error && (
          <div className="text-red-600 text-sm text-center font-medium">
            {error}
          </div>
        )}

        <h1 className="text-2xl font-bold text-center text-blue-700"> Don't stress over, just flip a coin! 🪙</h1>
        <input
          type="text"
          spellCheck={false}
          placeholder="Enter Decision 1"
          value={decision1}
          onChange={(e) => setDecision1(e.target.value)}
          className="p-2 border rounded shadow"
        />
        <input
          type="text"
          spellCheck={false}
          placeholder="Enter Decision 2"
          value={decision2}
          onChange={(e) => setDecision2(e.target.value)}
          className="p-2 border rounded shadow"
        />

        <button
          onClick={flipCoin}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow disabled:opacity-50"
          disabled={isFlipping}
        >
          Flip the Coin
        </button>

        {result && (
          <button
            onClick={reset}
            className="mt-2 text-sm underline text-blue-600"
          >
            Reset
          </button>
        )}
      </div>
    </main>
  );
}
