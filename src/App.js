import './App.css';
import 'antd/dist/antd.css';
import Banner from './assets/images/Banner.png';
import BackgroundIcon from './assets/images/BackgroundIcon.svg';
import BackgroundBottomRight from './assets/images/BackgroundBottomRight.png';
import BannerMobile from './assets/images/BannerMobile.png';
import Facebook from './assets/images/Facebook.svg';
import Instagram from './assets/images/Instagram.svg';
import Twitter from './assets/images/Twitter.svg';

import { Button, Col, Input, Row } from 'antd';

function App() {
  return (
    <Row>
      <Col xl={24}>
        <div className='main-container'>
          <img
            className='sign-up-background-icon'
            src={BackgroundIcon}
            alt='background'
          />
          <img
            className='sign-up-background-bottom-right'
            src={BackgroundBottomRight}
            alt='background'
          />
          <img
            className='sign-up-banner-mobile'
            src={BannerMobile}
            alt='Background'
          />
          <Col xl={13}>
            <img className='sign-up-banner-image' src={Banner} alt='banner' />
          </Col>

          <Col xl={11}>
            <div className='form-sign-up-container'>
              <div className='sign-up-heading'>Enter To Win</div>
              <div className='sign-up-title'>SignUp Form</div>
              <div className='sign-up-description'>
                Enter our giveaway for a chance to win
              </div>
              <div className='sign-up-date-time'>2 Days 23:13:29 Remaining</div>
              <div className='input-container'>
                <Input defaultValue={'Enter your email'} />
              </div>
              <div className='sign-up-btn-container'>
                <Button>CLAIM</Button>
              </div>

              <div className='sign-up-share-contact'>
                Share with your friends on
              </div>
              <div className='sign-up-contact-icon-container'>
                <img src={Facebook} alt='icon' />
                <img src={Instagram} alt='icon' />
                <img src={Twitter} alt='icon' />
              </div>
            </div>
          </Col>
        </div>
      </Col>
    </Row>
  );
}

export default App;
