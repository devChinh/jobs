import React, { useEffect } from 'react';
import '../styles/hud.css';
import img1 from '../assets/imgs/334317870_611211654241116_6005143060731910011_n.png';

function Test() {
  useEffect(() => {
    // const numb = document.querySelector('.numb') ;
    // let counter = 0;
    // setInterval(() => {
    //   if (counter == 100) {
    //     clearInterval();
    //   } else {
    //     counter += 1;
    //     numb.textContent = counter + '%';
    //   }
    // }, 80);
  }, []);
  return (
    <div className="circular">
      <div className="inner"></div>
      <div className="outer"></div>

      <img className="numb" src={img1} alt="" />

      <div className="circle">
        <div className="dot">
          <span></span>
        </div>
        <div className="bar left">
          <div className="progress"></div>
        </div>
        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
}

export default Test;
