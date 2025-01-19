import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Notificationbar() {
  return (
    <div className="notificationbar">
        <span style={{color: 'white'}}>
          Applications are now open for our Technical AI Safety Fellowship! Apply{' '}
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSenO6RaXsRtg_cV8EyMOdBRiPUwWBePbyoXEd44yFgzReH8BQ/viewform?usp=header" style={{color: 'white', textDecoration: 'underline'}}>here</Link>
          {' '}by January 1st 11:59 EST.
        </span>
    </div>
  );
}

export default Notificationbar