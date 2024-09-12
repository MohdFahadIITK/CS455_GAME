/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';


export function randomNumberGenerator() {
  const ans =  Math.floor(Math.random() * 6);
  if(ans<=4) return ans;
  else return ans + 1;
}

export default function InputButtons({ setCurrentScore, setBalls, setScore, setBotResponse }) {

  const navigate = useNavigate();

  function calculateScore(value) {
    console.log("Inputs recieved");
    setBalls(prevBalls => prevBalls + 1);
    const randomGeneratedValue = randomNumberGenerator();
    setBotResponse(randomGeneratedValue);
    if (value === randomGeneratedValue) {
      setCurrentScore(-1);     
      setTimeout(() => {
        navigate('/CS455_GAME/GameWon');
      }, 1000);
    } else {
      setCurrentScore(value);
      setScore(score => score + value)
    }
  }

  function CustomButton({ value }) {
    return (
      <button
        className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md"
        onClick={() => calculateScore(value)}
      >
        {value}
      </button>
    );
  }

  function renderButtonColumns() {
    const buttonValues = [0, 3, 1, 4, 2, 6];
    const columns = [];

    for (let i = 0; i < 3; i++) {
      columns.push(
        <div key={i} className="flex flex-col items-center justify-center space-y-5 w-full">
          <CustomButton value={buttonValues[i * 2]} />
          <CustomButton value={buttonValues[i * 2 + 1]} />
        </div>
      );
    }

    return columns;
  }

  return (
    <div className="flex flex-col items-center justify-center h-1/2 w-full">
      <h2 className="text-2xl mb-4">Choose your option</h2>
      <div className="flex justify-center space-x-4 items-center pr-4 py-4 h-1/2 w-full">
        {renderButtonColumns()}
      </div>
    </div>
  );
}
