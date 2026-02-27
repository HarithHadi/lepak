import { useState } from "react";
import MafiaSetup from "../Components/MafiaSetup";

export default function Mafia(){
    const [names, setnames] = useState(["", "","",""])
    const [phase, setPhase] = useState<"idle" | "setup" | "started" | "discussion" | "reveal">("idle");

    const addPerson = () => {
        if(names.length < 10){
            setnames([...names, ""]);
        }
    };

    const HandlePlayerChange = (index : number, value : string) => {
            const updatedNames = [...names];
            updatedNames[index] = value;
            setnames(updatedNames)
    }

    const confirmPlayers = () => {
        const finalPlayers = names.filter(name => name.trim() !== "");
        
        if (finalPlayers.length < 4) {
            alert("You need at least 4 players to start Mafia!");
            return;
        }

        console.log("Players confirmed:", finalPlayers);
        // console.log("Players confirmed:", names);
        setnames(finalPlayers)
        setPhase("setup")
    };
    
    return(
        <>
        <div className="font-bold text-white pb-2">
            <h1> Mafia Game</h1>            
        </div>
        {phase === "idle" && (
            <div className="bg-white p-6 border-3 flex flex-col">
                {names.map((name, index) => (
                    <div key={index} className="pb-4 flex flex-row items-center gap-2"> 
                        <label className="font-bold p-1 whitespace-nowrap">Enter Name</label>
                        <input type="text" className="border-2 border-black p-2 " onChange={(e) => HandlePlayerChange(index, e.target.value)}/>
                    </div>
                ))}
        
                <div className="pt-5">
                    <button 
                        onClick={addPerson}
                        disabled = {names.length >= 10}
                        className={`${names.length >= 10 ? 'bg-gray-400! cursor-not-allowed text-white shadow-none' : ''}`}
                    >{names.length >= 10 ? "Max Players Reached" : "Add Player +"}</button></div>
                <div className="pt-5"><button onClick={confirmPlayers}>Next</button></div>
            </div>
        )}
        {phase === "setup" && (<MafiaSetup totalPlayers={names.length} />)}
        </>
    )
}