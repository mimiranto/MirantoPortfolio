import './index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Header() {
  return (
    <header className='Navbar'>
      <h1>Portfolio</h1>
      <div className='reseau'>
        <ul>
          <li className='Projet'><a href='#projet'>Mes projets</a></li>
          <li><a href='https://www.linkedin.com/in/miranto-rakotobe-7492312a4/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#ffffff" }} /></a></li>
          <li><a href='https://github.com/mimiranto' target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "#ffffff" }} /></a></li>
          <li className='CV'><Link to="/ma-nouvelle-page" target='_blank'>CV</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
