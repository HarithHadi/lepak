import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="font-bold text-2xl">Choose your game</h1>

      {/* --- LOCKED GAME (Mafia) --- */}
      <div className="relative group">
        {/* The Chain/Tape Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="bg-yellow-400 text-black text-[10px] font-black px-4 py-0.5 uppercase tracking-tighter border-y border-black -rotate-12 shadow-md">
            Locked
          </div>
        </div>

        {/* The Button */}
        <button 
          disabled
          className="bg-gray-300 text-gray-500 border-2 border-dashed border-gray-400 px-10 py-4 rounded-xl grayscale opacity-60 cursor-not-allowed flex items-center gap-2"
        >
          Mafia 🔒
        </button>
      </div>

      {/* --- ACTIVE GAME (Word Game) --- */}
      <div className="p-4">
        <button 
          className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all" 
          onClick={() => navigate("/WordGame")}
        >
          Word Game
        </button>
      </div>
    </div>
  );
}