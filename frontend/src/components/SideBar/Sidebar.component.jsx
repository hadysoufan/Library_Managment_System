import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.styles.css';
import './Sidebar.responsive.styles.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Contact */}
          <li className="hidden">
            <Link onClick={call}>
              <i class="bx bxs-contact" />
              <span className="links_name">Contact</span>
            </Link>
            <span className="tooltip">01-453003</span>
          </li>

          {/* Email */}
          <li className="hidden">
            <Link onClick={email}>
              <i class="bx bx-envelope" />
              <span className="links_name">Email</span>
            </Link>
            <span className="tooltip">library@usal.edu.lb</span>
          </li>

          {/* Moodle */}
          <li className="hidden">
            <Link onClick={moodle}>
              <i class="bx bxs-graduation" />
              <span className="links_name">Moodle</span>
            </Link>
            <span className="tooltip">Moodle</span>
          </li>

          {/* Location */}
          <li className="hidden">
            <Link to="/messages">
              <i class="bx bx-current-location" />
              <span className="links_name">Location</span>
            </Link>
            <span className="tooltip">
              Ghobeiry,Old Airport Road, Beirut, Lebanon
            </span>
          </li>

          {/* Settings */}
          <li>
            <Link to="settings">
              <i className="bx bx-cog" />
              <span className="links_name">Setting</span>
            </Link>
            <span className="tooltip">Setting</span>
          </li>

          {/* user */}
          <li className="hidden">
            <Link to="/user">
              <i class="bx bx-user-pin" />
              <span className="links_name">USER</span>
            </Link>
            <span className="tooltip">USER</span>
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
    </>
  );
}

export default Sidebar;
