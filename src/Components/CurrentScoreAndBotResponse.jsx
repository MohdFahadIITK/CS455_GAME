export default function CurrentScoreAndBotResponse({ currentScore, botResponse }) {
    
    return (
        <div className="flex justify-center items-center px-10 py-10 h-1/2 w-full">
            <div className="flex flex-col items-center justify-center w-full py-10">
                <div className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">
                    {currentScore === -1 ? 'OUT' : currentScore}
                </div>
                <div className="flex items-center justify-center bg-white h-16 w-full text-3xl ">Current Score</div>
                <div className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">
                    {botResponse}
                </div>
                <div className="flex items-center justify-center bg-white h-16 w-full text-3xl ">Computer Response</div>
            </div>
        </div>
    );
}
