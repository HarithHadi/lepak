import { useState } from "react";
import StartWord from "../Components/StartWord";
import SetupScreenWord from "../Components/SetupScreenWord";
import { useEffect } from "react";


export default function WordGame(){
    //1. Enter the number of player
    //(optional) enter names
    //2. Start game 
        //2.1 Screen After player presses display then show the word
            //2.1.1 Display "Press the next button before passing the phone"
        //2.2 If the player is impostor show YOU ARE IMPOSTOR
        //2.3 Start Timer
    //3. Reveal who is the impostor
    const [words, setWords] = useState<string[]>([]);
    const [phase, setPhase] = useState<"idle" | "setup" | "started" | "discussion" | "reveal">("idle");
    const [numofPlayers, setNumofPlayers] = useState(3);
    const [showWord, setShowWord] = useState(false)
    const [impostor, setImpostor] = useState(0);
    const [ActiveWord, setActiveWord] = useState("");
    const [currentPlayer, setcurrentPlayer] = useState(0);
    const [timer, setTimer] = useState(0);

    //Changes the state from idle to setup
    const HandleOnCategorySelct = (selectedWords: string[]) => {
        setWords(selectedWords);
        setPhase("setup")
    }

    const handleFinalSetup = (num : number) => {
        setNumofPlayers(num);

        const randomImpostor = Math.floor(Math.random() * num)
        setImpostor(randomImpostor);

        const randomWord = words[Math.floor(Math.random() * words.length)]
        setActiveWord(randomWord);

        setPhase("started");
        
    }

    const handleNextPlayer = () => {
        setShowWord(false);
        if (currentPlayer < numofPlayers - 1) {
        // Move to the next person
        setcurrentPlayer(prev => prev + 1);
        setShowWord(false); 
        } else {
            // Everyone has seen it! 
            // Move to the "Discussion/Timer" phase
            setPhase("discussion"); 
        }
    }

    const resetGame = () => {
        setPhase("idle");
        setWords([]);
        setShowWord(false);
        setcurrentPlayer(0);
        setActiveWord("");
        setImpostor(0);
        setNumofPlayers(3); 
        setTimer(0);
    };

    useEffect(() => {
    let intervalId: any;

    if (phase === "discussion") {
        intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
        }, 1000);
    }

    return () => clearInterval(intervalId); 
    }, [phase]);
        


    

    return(
        <>
        <div className="pb-10"><h1 className="font-bold text-white"> Word Game</h1></div>
        {phase === "idle" && <StartWord onSelect={HandleOnCategorySelct}/>}
        {phase === "setup" && <SetupScreenWord onStart={handleFinalSetup}/> }
        {phase === "started" && (
            <div className="flex flex-col items-center p-8 space-y-3 bg-white border-3 shadow-xl border-black hover:shadow-[8px_8px_0_0] hover:scale-101 duration-50 ease-in-out">
                <h2 className="text-xl  text-gray-700">Player {currentPlayer + 1}'s Turn</h2>

                {!showWord ? (
                    // DIV 1: The "Ready?" screen
                    <div className="">
                        <button className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50" onClick={() => setShowWord(true)}>Reveal My Word</button>
                    </div>
                ) : (
                    // DIV 2: The "Secret" screen
                    <div className="">
                        <p className={`font-bold text-xl pb-4 ${currentPlayer === impostor ? "text-red-600 animate-pulse" : "text-green-700"}`}>{currentPlayer === impostor ? "YOU ARE IMPOSTOR" : ActiveWord}</p>
                        
                        {/* This button triggers the logic we wrote above */}
                        <button onClick={handleNextPlayer} className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50">
                            Done (Pass Phone)
                        </button>
                    </div>
                )}
            </div>

        )}
        {phase === "discussion" && (
            <div className="flex flex-col items-center gap-6 p-8 bg-white border-3 shadow-xl border-black hover:shadow-[8px_8px_0_0] hover:scale-101 duration-50 ease-in-out">
                <label className="text-gray-700 font-bold text-2xl">Discuss Time</label>
                {/* Simple MM:SS formatting */}
                <div className="text-5xl font-mono my-4 text-red-400">
                    {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
                </div>
                <button onClick={() => setPhase("reveal")} className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50">Reveal the Impostor</button>
            </div>
        ) }
        {phase === "reveal" && (
            <div className="flex flex-col items-center gap-6 p-8 bg-white border-3 shadow-xl border-black hover:shadow-[8px_8px_0_0] hover:scale-101 duration-50 ease-in-out">
                <label className="text-red-500 font-bold text-2xl"> Player {impostor + 1}</label>
                <button onClick={()=> resetGame()} className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50">Play Again?</button>
            </div>
        ) }

        </>
    )
}