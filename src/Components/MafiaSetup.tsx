import { useState } from "react"

useState
export default function MafiaSetup({totalPlayers} : { totalPlayers : number }){
    const [numMafia, setnumMafia]  = useState(0)

    const maxMafia = Math.floor(totalPlayers / 2.5) || 1;
    const minMafia = 1;

    const numVillager = totalPlayers - numMafia;

    const handleMafiaChange = (val : number) => {
        const clampedValue = Math.max(minMafia, Math.min(val, maxMafia))
        setnumMafia(clampedValue)
    }

    




    return(
        <>
        <div className="border-black bg-white p-6 border-3 flex flex-col font-bold gap-y-4">
            <div className="flex justify-center gap-x-2 text-lg">
                <span>Total Players:</span>
                <span className="text-blue-600">{totalPlayers}</span>
            </div>


            <div className="flex items-center">
                <label className="w-20 mr-2">Villager</label> 
                <input 
                    type="number"
                    className="border-black border-2 p-2 flex-1 bg-gray-100 cursor-not-allowed" 
                    value={numVillager}
                    disabled
                />
            </div>

            <div className="flex items-center">
                <label className="w-20 mr-2">Mafia</label>
                <input 
                    type="number"
                    className="border-black border-2 p-2 flex-1"
                    value={numMafia}
                    min={minMafia}
                    max={maxMafia}
                    onChange={(e) => {handleMafiaChange(parseInt(e.target.value) || 0)}} 
                />
            </div>
            <p className="text-xs text-gray-500 italic">
                * Max Mafia for {totalPlayers} players is {maxMafia}.
            </p>
            <div className="pt-2">
                <button className="self-center w-full">next</button>
            </div>
        </div>
        </>
    )
}