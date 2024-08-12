import { useState } from "react";

export default function ScoreDisplay({score, balls}) {
    const overs =  Math.floor(balls/6);
    const remainingBValls = balls % 6;
    return (
        <div className="flex justify-center items-center px-10 py-10 h-1/2 w-full">
            <div className="flex flex-col items-center justify-center w-full py-10">
                <div className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">{score}</div>
                <div className="flex items-center justify-center bg-white h-16 w-full text-3xl ">Score</div>
                <div className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">{overs}.{remainingBValls}</div>
                <div className="flex items-center justify-center bg-white h-16 w-full text-3xl ">Over</div>
            </div>
        </div>
    );
}
