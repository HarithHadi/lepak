import { useState } from "react";

type MafiaGameProps = {
    names: string[];
};

export default function MafiaGame({names}: MafiaGameProps ){

    const [mafia, setMafia] = useState([]);

    const whosMafaia = () => {
        const num = names.length;
        const randomMafia = Math.floor(Math.random() * num)

        const mafias = []; 

        setMafia(names[randomMafia])
    }

    return(
        <>
        <div className="border-black bg-white p-6 border-3 flex flex-col font-bold gap-y-4">
            <div className="">
                <p className={`font-bold text-xl pb-4  text-green-700`}>You are villager</p>
                
                <button className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-50">
                    Done (Pass Phone)
                </button>
            </div>
        </div>
        </>
    )
}