/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from "react";
import ScoreDisplay from "./ScoreDisplay";
import GifComponent from "./GifComponent";
import {InputButtons} from "./InputButtons";
import CurrentScoreAndBotResponse from "./CurrentScoreAndBotResponse";

export default function Play(){

    const [score,setScore] = useState(null);
    const [currentScore,setCurrentScore] = useState(null);
    const [balls,setBalls] = useState(null);
    const [botResponse,setBotResponse] = useState(null);
    
    return <div className="flex h-screen">
        <div className="flex flex-col h-full w-1/2">
            <GifComponent currentScore={currentScore}/>
            <ScoreDisplay score={score} balls={balls}></ScoreDisplay>
        </div>
        <div className="flex flex-col h-full w-1/2">
            <InputButtons setCurrentScore={setCurrentScore} setBalls={setBalls} setScore={setScore} setBotResponse = {setBotResponse}/>
            <CurrentScoreAndBotResponse currentScore={currentScore} botResponse={botResponse} />
        </div>
    </div>
}