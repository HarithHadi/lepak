import { useState } from "react";

interface SetupProps {
  onStart: (numPlayers: number) => void;
}

export default function SetupScreenWord({ onStart }: SetupProps) {
  
  const [playerCount, setPlayerCount] = useState<number>(3);

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-8 bg-white border-3 shadow-xl border-black hover:shadow-[8px_8px_0_0] hover:scale-101 duration-50 ease-in-out">
        <h2 className="text-2xl font-black text-gray-800">Game Setup</h2>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many players?
          </label>
          <input
            type="number"
            min="3"
            max="20"
            value={playerCount}
            onChange={(e) => setPlayerCount(parseInt(e.target.value) || 0)}
            className="w-full p-4 text-gray-700 text-2xl text-center font-bold border-2 border-gray-700 focus:border-blue-500 focus:outline-none transition"
          />
          <p className="text-gray-500 text-xs mt-2 text-center">
            Minimum 3 players required
          </p>
        </div>

        <button
          onClick={() => onStart(playerCount)}
          className="bg-green-500 text-white px-10 py-4 w-full rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50"
        >
          Start Game
        </button>
      </div>
    </>
  );
}