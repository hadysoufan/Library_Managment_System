import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/footerLogo.png';
import './Footer.responsive.styles.css';
import './Footer.styles.css';

function Footer() {
  // function that increase the last digit in the year on 31 in month 12
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (new Date().getMonth() === 12 && new Date().getDate() === 31) {
        setYear(year + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [year]);

  // social media links to be redirected
  const linkedIn = () => {
    window.open('https://www.linkedin.com/school/usal.uni/', '_blank');
  };

  const facebook = () => {
    window.open('https://www.facebook.com/Usal.uni', '_blank');
  };

  const instagram = () => {
    window.open('https://www.instagram.com/usal.uni/', '_blank');
  };

  const email = () => {
    window.open('https://mail.google.com', '_blank');
  };

  const moodle = () => {
    window.open('https://moodle.usal.edu.lb/lms/', '_blank');
  };

  const call = () => {
    window.location.href = 'tel:01453003';
  };

  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <Link to="/">
            <img className="footer_logo" src={logo} alt="USAL Library logo" />
          </Link>
          <ul className="social-links">
            {/* Instagram Link */}
            <Link onClick={instagram} className="footer-link">
              <li>
                <i class="bx bxl-instagram-alt" />
              </li>
            </Link>

            {/* Facebook link */}
            <li>
              <Link onClick={facebook} className="footer-link">
                <i class="bx bxl-facebook-square" />
              </Link>
            </li>

            {/* LinkedIn link */}
            <li>
              <Link onClick={linkedIn} className="footer-link" href="#">
                <i class="bx bxl-linkedin-square" />
              </Link>
            </li>
          </ul>
          ;
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              Ghobeiry,Old Airport Road, Beirut, Lebanon
            </p>
            <p>
              <a onClick={call} className="footer-link" href="tel:01453003">
                01453003
              </a>
              <br />
              <a
                className="footer-link"
                onClick={email}
                href="mailto:library@usal.edu.lb">
                library@usal.edu.lb
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <Link to="/signup" className="footer-link" href="#">
                Create account
              </Link>
            </li>
            <li>
              <Link to="/signin" className="footer-link" href="#">
                Sign in
              </Link>
            </li>
            <li>
              <Link className="footer-link" onClick={moodle} href="#">
                Moodle
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Library</p>
          <ul className="footer-nav">
            <li>
              <Link to="/about" className="footer-link" href="#">
                About USAL Library
              </Link>
            </li>
            <li>
              <Link to="/books" className="footer-link" href="#">
                For Booking
              </Link>
            </li>
            <li>
              <Link to="/partners" className="footer-link" href="#">
                Book Partners
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <Link to="/books" className="footer-link" href="#">
                Our Books
              </Link>
            </li>
            <li>
              <Link to="/chat" className="footer-link" href="#">
                Help center
              </Link>
            </li>
            <li>
              <Link to="/privacy&terms" className="footer-link" href="#">
                Privacy & terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="copyright">
        Copyright &copy; {year} by USAL Library. All rights reserved. Powered by
        USAL Team
      </p>
    </footer>
  );
}

export default Footer;
