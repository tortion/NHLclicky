import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <div>NHL Click-away game</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      {/* Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore} */}
      Score: {props.score} <span className="pipe"></span>
    </div>
  </div>
);

export default Navbar;