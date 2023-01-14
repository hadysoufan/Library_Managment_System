import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-details">
          <i class="bx bxs-book-content icon"></i>
          <div className="logo_name">USAL Library</div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <ul className="nav-list">
          {/* Search */}
          <li>
            <i className="bx bx-search" onClick={() => setIsOpen(!isOpen)} />
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>

          {/* Messages */}
          <li>
            <Link to="/messages">
              <i className="bx bx-chat" />
              <span className="links_name">Messages</span>
            </Link>
            <span className="tooltip">Messages</span>
          </li>

          {/* Saved */}

          <li>
            <Link to="/saved">
              <i className="bx bx-heart" />
              <span className="links_name">Saved</span>
            </Link>
            <span className="tooltip">Saved</span>
          </li>

          {/* Settings */}
          <li>
            <Link to="settings">
              <i className="bx bx-cog" />
              <span className="links_name">Setting</span>
            </Link>
            <span className="tooltip">Setting</span>
          </li>

          {/* User */}
          <Link to="logIn">
            <li className="profile">
              <div className="profile-details">
                <div className="name_job">
                  <div className="name">Hadi Soufan</div>
                  <div className="job">Web Developer</div>
                </div>
              </div>
              <i className="bx bx-log-out" id="log_out"></i>
            </li>
          </Link>
        </ul>
      </div>
      <section className="home-section">
        <div className="text">USAL</div>
      </section>
    </>
  );
}

export default Navbar;
