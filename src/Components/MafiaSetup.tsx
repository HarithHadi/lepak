export default function MafiaSetup({totalPlayers} : { totalPlayers : number }){
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
                    className="border-black border-2 p-2 flex-1" 
                />
            </div>

            <div className="flex items-center">
                <label className="w-20 mr-2">Mafia</label>
                <input 
                    type="number"
                    className="border-black border-2 p-2 flex-1" 
                />
            </div>
            <div className="pt-2">
                <button className="self-center w-full">next</button>
            </div>
        </div>
        </>
    )
}