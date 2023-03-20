import React from 'react';
import 'styles/recordPilot/header.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Header() {
  return (
    <div className="h-container">
      <div className="h-container__left">
        <h3>UAV : uid_02</h3>
        <div>
          <p>Mission setting complete</p>
        </div>
        <div>
          <div>Disarmed</div>
          <div>Stabilize</div>
        </div>
      </div>
      <div className="h-container__center">
        <p>Autopilot EmptyBattery</p>
      </div>
      <div className="h-container__right">
        <ul>
          <li>
            <LocationOnIcon />
          </li>
          <li>
            <LocationOnIcon />
          </li>
          <li>
            <LocationOnIcon />
          </li>
          <li>
            <LocationOnIcon />
          </li>
          <li>
            <LocationOnIcon />
          </li>
          <li>
            <LocationOnIcon />
          </li>
          <li>
            <LocationOnIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
