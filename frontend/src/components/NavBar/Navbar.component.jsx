/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.styles.css';
import logo from '../../assets/images/usal.png';
import phone from '../../assets/images/phone-call.png';
import mail from '../../assets/images/mail.png';
import location from '../../assets/images/gps.png';
import grad from "../../assets/images/mortarboard.png";
import { Link } from 'react-router-dom';

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
    <header className="home-section">
        <div className="row">
          <div className="full">
            <Link to="/">
              <img className="logo" src={logo} alt="#" />
            </Link>
          </div>
        </div>
        <div className="col-md-9">
          <div className="right_header_info">
            <ul>
              <Link onClick={call}>
                <li className="dinone">
                  Contact Us :{' '}
                  <img
                    style={{
                      marginRight: '15px',
                      marginBottom: '-7px',
                    }}
                    src={phone}
                    alt="dd"
                  />
                  <a>01-453003</a>
                </li>
              </Link>

              <Link onClick={email}>
                <li className="dinone">
                  <img
                    style={{ marginRight: '15px', marginBottom: '-7px' }}
                    src={mail}
                    alt="#"
                  />
                  <a>library@usal.edu.lb</a>
                </li>
              </Link>

              <Link onClick={moodle}>
                <li className="dinone">
                  <img
                    style={{ marginRight: '15px', marginBottom: '-7px' }}
                    src={grad}
                    alt="#"
                  />
                  <a>Moodle</a>
                </li>
              </Link>

              <li className="dinone">
                <img
                  style={{
                    marginRight: '15px',
                    marginBottom: '-7px',
                  }}
                  src={location}
                  alt="#"
                />
                <a>Ghobeiry,Old Airport Road, Beirut, Lebanon</a>
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
        </div>
    </header>
  );
}

export default NavBar;
