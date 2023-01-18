import React from 'react';
import logo from '../../assets/images/usal.png';
import phone from '../../assets/images/phone-call.png';
import mail from '../../assets/images/mail.png';
import location from '../../assets/images/gps.png';
import grad from '../../assets/images/mortarboard.png';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';
import './Navbar.responsive.styles.css';

function NavBar() {

  const call = () => {
    window.location.href = 'tel:01453003';
  };

  const email = () => {
    window.open('https://mail.google.com', '_blank');
  };

  const moodle = () => {
    window.open('https://moodle.usal.edu.lb/lms/', '_blank');
  };

  return (
    <nav className="logo-section">
      <Link to="/">
        <div>
          <img className="logo" src={logo} alt="#" />
        </div>
      </Link>

      <div className="right_header_info">
        <ul>
          <Link onClick={call}>
            <li>
              Contact Us :{' '}
              <img
                style={{
                  marginRight: '15px',
                  marginBottom: '-7px',
                }}
                src={phone}
                alt="dd"
              />
              01-453003
            </li>
          </Link>
          <Link onClick={email}>
            <li>
              <img
                style={{ marginRight: '15px', marginBottom: '-7px' }}
                src={mail}
                alt="#"
              />
              library@usal.edu.lb
            </li>
          </Link>
          <Link onClick={moodle}>
            <li>
              <img
                style={{ marginRight: '15px', marginBottom: '-7px' }}
                src={grad}
                alt="#"
              />
              Moodle
            </li>
          </Link>
          <li>
            <img
              style={{
                marginRight: '15px',
                marginBottom: '-7px',
              }}
              src={location}
              alt="#"
            />
            Ghobeiry,Old Airport Road, Beirut, Lebanon
          </li>

          <li className="button_user">
            <a className="button active" href="#">
              Login
            </a>
            <a className="button" href="#">
              <span>Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
