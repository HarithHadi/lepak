import { useState, useEffect } from "react";


interface SetupProps {
  onStart: (numPlayers: number, ImpostorCount: number) => void;
}

export default function SetupScreenWord({ onStart }: SetupProps) {
  
  const [playerCount, setPlayerCount] = useState<number>(3);
  const [ImpostorCount,setImpostorCount] = useState<number>(1);
  const allowTwo = playerCount >= 5;
  const allowThree = playerCount >= 8;

  useEffect(() => {
    if (playerCount < 5) {
      setImpostorCount(1);
    } 
    else if (playerCount < 8) {
      setImpostorCount(1); 
    } 
    else {
      setImpostorCount(2); 
    }
  }, [playerCount]);

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-8 bg-white border-3 shadow-xl border-black hover:shadow-[8px_8px_0_0] hover:scale-101 duration-50 ease-in-out">
        <h2 className="text-2xl font-black text-gray-800">Game Setup</h2>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many players?
          </label>
          <input
            placeholder="0"
            type="number"
            min="3"
            max="20"
            value={playerCount}
            onChange={(e) => setPlayerCount(parseInt(e.target.value))}
            className="w-full p-4 text-gray-700 text-2xl text-center font-bold border-2 border-gray-700 focus:border-blue-500 focus:outline-none transition"
          />
          <p className="text-gray-500 text-xs mt-2 text-center">
            Minimum 3 players required
          </p>
        </div>
        
        {/* Impostor count */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many Impostor?
          </label>
          <div className="space-x-3">
            <button
                onClick={() => setImpostorCount(1)}
                className={`px-4 py-2 border-2 border-black font-bold ${
                  ImpostorCount === 1 ? "bg-[#00ED10]!" : ""
                }`}
              >
                1
            </button>
            <button
              disabled={!allowTwo}
              onClick={() => setImpostorCount(2)}
              className={`px-4 py-2 border-2 border-black font-bold ${
                ImpostorCount === 2 ? "bg-[#00ED10]!" : ""
              } ${!allowTwo ? "opacity-40 cursor-not-allowed" : ""}`}
            >
              2
            </button>

            <button
              disabled={!allowThree}
              onClick={() => setImpostorCount(3)}
              className={`px-4 py-2 border-2 border-black font-bold ${
                ImpostorCount === 3 ? "bg-[#00ED10]!" : ""
              } ${!allowThree ? "opacity-40 cursor-not-allowed" : ""}`}
            >
              3
            </button>
          </div>
        </div>

        <button
          onClick={() => onStart(playerCount, ImpostorCount)}
          className="bg-green-500 text-white px-10 py-4 w-full rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50"
        >
          Start Game
        </button>
      </div>
    </>
  );
}