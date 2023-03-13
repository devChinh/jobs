import React, { useEffect, useState } from 'react';
import '../styles/hud.css';

import imgDirection from 'assets/imgs/332065369_2302485676587786_5404387559142424290_n.png';
import img2 from '../assets/imgs/334317870_611211654241116_6005143060731910011_n.png';
import img3 from '../assets/imgs/334462227_160494593506771_2137353216271196760_n.png';
import img4 from '../assets/imgs/334112063_1851173378615135_625227057301837093_n.png';
import img1 from '../assets/imgs/332055990_501350342195038_9091202099586361818_n.png';
import img5 from '../assets/imgs/332068404_1166088850601387_331605195831624421_n.png';
import img6 from '../assets/imgs/334447202_667007765424910_6047981401553463688_n.png';
import img7 from '../assets/imgs/334066600_743781693902821_2860587913427990033_n.png';
import img8 from '../assets/imgs/334285119_872787753947936_8806007526420945171_n.png';
import img9 from '../assets/imgs/332016906_222436203533980_2541503034845993962_n.png';

const frameSpeed = {
  heading: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
  slip: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
  descent: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
};

const height = {
  heightAgl: 0,
  heightMsl: 10,
  speed1: -180,
  speed2: 0,
};

const Hud = () => {
  const [indicators, setIndicators] = useState([
    300, 250, 200, 150, 100, 50, 0, -50, -100, -150, -200, -250,
  ]);
  const [directionIndicators1, setDirectionIndicators1] = useState([
    150, 100, 50, 0,
  ]);
  const [directionIndicators2, setDirectionIndicators2] = useState([
    -50, -100, -150,
  ]);
  const [heightAgl, setHeightAgl] = useState(height.heightAgl);
  const [speed1, setSpeed1] = useState(height.speed1);
  const [speed2, setSpeed2] = useState(height.speed2);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHeightAgl(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
  //   }, 2000);
  // }, [heightAgl]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSpeed1(0);
  //     setSpeed2(Math.floor(Math.random() * (90 - 0 + 1)) + 0);
  //   }, 2000);
  // }, [speed1, speed2]);

  return (
    <div className="hub-container">
      <div className="hub-container__left">
        <h3>second Update</h3>
        <ul>
          <li>Lat</li>
          <li>Lon</li>
          <li>Alt. m MSL</li>
          <li>
            Dir. <span>&#176;</span>
          </li>
          <li>Dis. m</li>
          <li>ETE. second</li>
          <li>ETA. second</li>
        </ul>
      </div>
      <div className="hub-container__center">
        <div className="hub-container__center-top">
          <div className="hub-container__center-top-child">
            <div
              style={{
                clipPath:
                  speed1 == 0
                    ? 'none'
                    : 'polygon(0 0, 91% 0%, 57% 28%, -3% 100%)',
              }}
              className="hub-container__center-top-rotate-1"
            >
              <img
                style={{
                  transform:
                    speed1 > -180 ? `rotate(${speed1}deg)` : 'rotate(-180deg)',
                }}
                className="img1-1"
                src={img1}
                alt="img1"
              />
            </div>
            <div
              style={{
                clipPath:
                  speed1 == 0
                    ? 'none'
                    : 'polygon(0 0, 91% 0%, 57% 28%, -3% 100%)',
              }}
              className="hub-container__center-top-rotate-2"
            >
              <img
                style={{
                  transform:
                    speed1 == 0 ? `rotate(${speed2}deg)` : 'rotate(-180deg)',
                }}
                className="img1-2"
                src={img1}
                alt="img1"
              />
            </div>
            <img className="img2" src={img2} alt="img2" />
            <img className="img3" src={img3} alt="img3" />
            <img className="img4" src={img4} alt="img4" />
            <img className="img5" src={img5} alt="img5" />
            <img
              style={{ transform: `rotate3d(0, 1, 0, ${heightAgl}deg)` }}
              className="img6"
              src={img6}
              alt="img6"
            />
            <img className="img7" src={img7} alt="img7" />
            <div className="direction-indicator">
              <div className="scroll-direction">
                <div
                  style={{
                    top: heightAgl > 0 ? `${heightAgl * 3.5}px` : '217px',
                  }}
                  className="scrollbar-direction"
                >
                  {directionIndicators1.map((item, index) => {
                    return (
                      <div className="scroll-direction-item" key={index}>
                        <span>{item}</span>
                        <img src={img8} alt="img8" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                  {directionIndicators2.map((item, index) => {
                    return (
                      <div className="scroll-direction-item" key={index}>
                        <span>{item}</span>
                        <img src={img9} alt="img9" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hub-container__center-bottom">
          <img className="imgDirection" src={imgDirection} alt="imgDirection" />
          <div className="indicator-bar-direction">
            <div
              style={{
                marginLeft: `-${heightAgl * 3.5}px`,
              }}
              className="scrollbar"
            ></div>
          </div>
        </div>
      </div>
      <div className="hub-container__right">
        <div className="frame-speed">
          <h3>Frame Speed</h3>
          <ul>
            <li>
              <p>Heading</p>
              <p>{`${frameSpeed.heading.toFixed(2)} m/s `}</p>
            </li>
            <li>
              <p>Slip</p>
              <p>{`${frameSpeed.slip.toFixed(2)} m/s `}</p>
            </li>
            <li>
              <p>Descent</p>
              <p>{`${frameSpeed.descent.toFixed(2)} m/s `}</p>
            </li>
          </ul>
        </div>
        <div className="height-indicator">
          <div className="scroll-icon"></div>
          <div className="scroll">
            <div
              style={{
                top: `${heightAgl * 3.5}px`,
              }}
              className="scrollbar"
            >
              {/* <div className="scroll-number-list">
                {indicators.map((indicator, key) => {
                  return (
                    <div key={key} className="scroll-number">
                      {indicator}
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
        <ul className="height-list">
          <li>
            <p>Height (AGL)</p>
            <p>{`${heightAgl.toFixed(2)}`}</p>
          </li>
          <li>
            <p>Height (MSL)</p>
            <p>{`${height.heightMsl.toFixed(2)}`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hud;
