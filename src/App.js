import './App.css';
import Banner from './assets/images/Banner.png';
import BackgroundIcon from './assets/images/BackgroundIcon.svg';
import BackgroundBottomRight from './assets/images/BackgroundBottomRight.png';

function App() {
  return (
    <div className='App' style={{ display: 'flex', position: 'relative' }}>
      <img src={Banner} alt='banner' style={{ zIndex: '999' }} />
      <img
        style={{ position: 'absolute', bottom: '2%', right: '-2%' }}
        src={BackgroundIcon}
        alt='background'
      />
      <img
        style={{ position: 'absolute', bottom: '0', right: '0' }}
        src={BackgroundBottomRight}
        alt='background'
      />

      <div>
        <div className='sign-up-heading'>Enter To Win</div>
        <div className='sign-up-title'>SignUp Form</div>
        <div className='sign-up-description'>
          Enter our giveaway for a chance to win
        </div>
        <div className='sign-up-date-time'>2 Days 23:13:29 Remaining</div>
        <input />
      </div>
    </div>
  );
}

export default App;
