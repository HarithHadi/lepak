import { useState } from "react";
import { useEffect } from "react";

export default function Mafia(){
    const [names, setnames] = useState(["", "","",""])

    const addPerson = () => {
        setnames([...names, ""]);
        
    };
    
    return(
        <>
        <div className="font-bold text-white pb-2">
            <h1> Mafia Game</h1>            
        </div>

        <div className="bg-white p-6 border-3 flex flex-col">
            {names.map((name, index) => (
                <div key={index} className="pb-4 flex flex-row items-center gap-2"> 
                    <label className="font-bold p-1 whitespace-nowrap">Enter Name</label>
                    <input type="text" className="border-2 border-black p-2"/>
                </div>
            ))}
    
            <div className="pt-5"><button onClick={addPerson}>Add Player + </button></div>
            <div className="pt-5"><button>Next</button></div>
        </div>
        </>
    )
}