/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from "react";
import ScoreDisplay from "./ScoreDisplay";
import GifComponent from "./GifComponent";
import {InputButtons} from "./InputButtons";
import CurrentScoreAndBotResponse from "./CurrentScoreAndBotResponse";
import { useAuth } from '../contexts/AuthContext';

export default function Play(){

    const [score,setScore] = useState(null);
    const [currentScore,setCurrentScore] = useState(null);
    const [balls,setBalls] = useState(null);
    const [botResponse,setBotResponse] = useState(null);

    const { token, userName } = useAuth();
    
    return <div className="flex h-screen">
        <div className="flex flex-col h-full w-1/2">
            <GifComponent currentScore={currentScore}/>
            <ScoreDisplay score={score} balls={balls}></ScoreDisplay>
        </div>
        <div className="flex flex-col h-full w-1/2">
            <InputButtons score = {score} setCurrentScore={setCurrentScore} setBalls={setBalls} setScore={setScore} setBotResponse = {setBotResponse} token = {token} userName = {userName} />
            <CurrentScoreAndBotResponse currentScore={currentScore} botResponse={botResponse} />
        </div>
    </div>
}