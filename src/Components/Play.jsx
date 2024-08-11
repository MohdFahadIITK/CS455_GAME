import { useState } from "react";
import ScoreDisplay from "./ScoreDisplay";

export default function Play(){

    const [score,setScore] = useState(0);
    const [balls,setBalls] = useState(0);
    
    return <div className="flex h-screen">
        <div className="flex flex-col h-full w-1/2">
            <ScoreDisplay score={score} balls={balls}></ScoreDisplay>
        </div>
        <div className="flex flex-col h-full w-1/2"></div>
    </div>
}