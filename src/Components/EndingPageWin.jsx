import TryAgainButton from './TryAgainButton';
import EndPageContentWin from './EndPageContentWin';
import myImage from '../assets/pexels-jurie-maree-3665535-5519470.jpg';

export default function EndingPageWin() {
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <EndPageContentWin />
      <TryAgainButton />
    </div>
  );
}
