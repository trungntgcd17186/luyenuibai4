import './App.css';
import 'antd/dist/antd.css';
import Banner from './assets/images/Banner.png';
import BackgroundIcon from './assets/images/BackgroundIcon.svg';
import BackgroundMobile from './assets/images/BackgroundMobile.svg';
import BackgroundBottomRight from './assets/images/BackgroundBottomRight.png';
import BannerMobile from './assets/images/BannerMobile.png';
import Facebook from './assets/images/Facebook.svg';
import Instagram from './assets/images/Instagram.svg';
import Twitter from './assets/images/Twitter.svg';

import { Button, Col, Input, Row } from 'antd';

function App() {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <div className='main-container'>
          <Col xs={0} sm={0} xl={13} />
          <Col xs={24} sm={24} xl={11}>
            <div className='form-sign-up-container'>
              <div className='form-sign-up-heading-container'>
                <div className='sign-up-heading'>Enter To Win</div>
                <div className='sign-up-title'>SignUp Form</div>
              </div>
              <div className='form-sign-up-content-container'>
                <div className='sign-up-description'>
                  Enter our giveaway for a chance to win
                </div>
                <div className='sign-up-date-time'>
                  2 Days 23:13:29 Remaining
                </div>
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
                  <a href='/#'>
                    <img src={Facebook} alt='icon' />
                  </a>
                  <a href='/#'>
                    <img src={Instagram} alt='icon' />
                  </a>
                  <a href='/#'>
                    <img src={Twitter} alt='icon' />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Col>
    </Row>
  );
}

export default App;
