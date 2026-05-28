import { useState, useEffect } from "react";

type Phase = "idle" | "setup" | "started" | "discussion" | "reveal";

type MafiaGameProps = {
    names: string[];
    numMafia : number;
    setPhase: React.Dispatch<React.SetStateAction<Phase>>;
};

export default function MafiaGame({names, numMafia ,setPhase}: MafiaGameProps ){

    const [mafia, setMafia] =useState<number[]>([]);
    const [currentPlayer, setcurrentPlayer] = useState(0);
    const [showRole, setshowRole] = useState(false);
    

    // const whosMafia = () => {
    //     const newMafia: number[] = [];
        
    //     while(newMafia.length < numMafia){
    //         const randomPlayer = Math.floor(Math.random() * names.length);
    //         if(!newMafia.includes(randomPlayer)){
    //             newMafia.push(randomPlayer)
    //         }
    //     }

    //     setMafia(newMafia)        
    // }

    // useEffect(() => {
    //     whosMafia();
    // }, [names, numMafia]) // Runs if names or numMafia change

    useEffect(()=> {
        const newMafia: number[] = [];
        while(newMafia.length < numMafia){
            const randomPlayer = Math.floor(Math.random() * names.length);
            if(!newMafia.includes(randomPlayer)){
                newMafia.push(randomPlayer)
            }

        }
        setMafia(newMafia)
    }, [names, numMafia])

    const handleNextPlayer = () =>{
        setshowRole(false);
        if(currentPlayer < names.length -1){
            setcurrentPlayer((prev) => prev +1);
        } else {
            setPhase("discussion");
        }
    }

    const isMafia = mafia.includes(currentPlayer);
    const currentPlayerName = names[currentPlayer];

    return(
        <div className="flex flex-col items-center p-8 space-y-3 bg-white border-3 shadow-xl border-black hover:shadow-[8px_8px_0_0] hover:scale-101 duration-50 ease-in-out font-bold">
            
            {!showRole ? (
                /* --- HIDDEN SCREEN: PASS PHONE TO NEXT PERSON --- */
                <div className="flex flex-col items-center gap-y-4 text-center">
                    <h2 className="text-xl text-gray-700">
                        Give the phone to <span className="text-blue-600 text-2xl block mt-1">{currentPlayerName}</span>
                    </h2>
                    
                    <button 
                        onClick={() => setshowRole(true)} 
                        className="bg-blue-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50"
                    >
                        Reveal My Role
                    </button>
                </div>
            ) : (
                /* --- REVEALED SCREEN: SHOWING THE SECRET ROLE --- */
                <div className="flex flex-col items-center gap-y-4 text-center">
                    <h2 className="text-sm text-gray-400 uppercase tracking-wider">{currentPlayerName}'s Secret Role:</h2>
                    
                    <p className={`font-black text-3xl pb-4 tracking-wide ${isMafia ? "text-red-600 animate-pulse" : "text-green-700"}`}>
                        {isMafia ? "⚠️ YOU ARE MAFIA" : "🧑‍🌾 YOU ARE VILLAGER"}
                    </p>

                    {/* Optional helper context if multiple mafia need to know their team */}
                    {isMafia && mafia.length > 1 && (
                        <p className="text-xs text-red-400 font-normal max-w-xs mb-2">
                            Your teammates: {mafia.filter(p => p !== currentPlayer).map(p => names[p]).join(", ")}
                        </p>
                    )}
                    
                    <button 
                        onClick={handleNextPlayer} 
                        className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50"
                    >
                        {currentPlayer < names.length - 1 ? "Done (Pass Phone)" : "Start Night Phase"}
                    </button>
                </div>
            )}

        </div>
    )
}