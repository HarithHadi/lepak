import { useNavigate } from "react-router-dom";
export default function start(){
    const navigate = useNavigate();

    return(
        <>
        <h1 className="font-bold p-8 text-white">Welcome to Lepak!</h1>
        <button onClick={() => navigate("/home")} className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all" >
            Start Game
        </button>
        </>
    )
}