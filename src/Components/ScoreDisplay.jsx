import { useState } from "react";

export default function ScoreDisplay({score, balls}) {
    const overs =  Math.floor(balls/6);
    const remainingBValls = balls % 6;
    return (
        <div className="flex justify-center space-x-4 items-center px-4 py-4  h-1/2 w-full">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center bg-white h-16 w-60 text-3xl border-2 border-black border-solid rounded-md">{score}</div>
                <div className="flex mt-2 font-semibold text-2xl">Score</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center bg-white h-16 w-60 text-3xl border-2 border-black border-solid rounded-md">{overs}.{remainingBValls}</div>
                <div className="flex mt-2 font-semibold text-2xl">Overs</div>
            </div>
        </div>
    );
}
