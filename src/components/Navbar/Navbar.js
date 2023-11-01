import React from 'react';
import "./Navbar.css";
import discord from './discord.svg';
import act from "./act.svg";
import github from './github.svg';


const Navbar = () => {
	return (
		<div className="nav">
        	<div className="navhead"><h1> Git OpenFirms </h1></div>
	          <a href="https://discord.com/invite/JAde4Nsx"  target="_blank" rel="noopener noreferrer">
	              <img src={discord} className="logo" alt="discord logo" />
	              <span>Discord</span>
	          </a>
	          <a href="https://github.com/stlajay/gitopenfirms" target="_blank" rel="noopener noreferrer">
	              <img  src={github} className="logo" alt="github logo" />
	              <span>GitHub</span>
	          </a>
	          <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">
	              <img   src={act} className="logo" alt="act logo" />
	              <span>React</span>
	          </a>
      </div>
	);
};

export default Navbar;