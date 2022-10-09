import './Navbar.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [change, setChange] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  function controlNavbar() {
    if (window.scrollY > 0) {
      setChange(true);
    } else {
      setChange(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <nav className={`nav ${change ? 'active' : ''}`}>
      <button
        onClick={() => {
          setShowSideNav(true);
        }}
        className="hamburger"
      >
        <div className="hamburger__line" />
        <div className="hamburger__line" />
        <div className="hamburger__line" />
      </button>
      <ul className="nav__list">
        <li>Jira Apps</li>
        <li>About Us</li>
        <li>Resources</li>
        <li>Support</li>
      </ul>

      <div>
        <img
          className="nav__logo"
          alt="logo"
          src="https://digitaltoucan.com/wp-content/uploads/2022/06/logo-digital-toucan-v2.svg"
        />
      </div>

      {showSideNav && (
        <div>
          <ul className="nav__side-nav">
            <li>Jira Apps</li>
            <li>About Us</li>
            <li>Resources</li>
            <li>Support</li>
          </ul>
          <button
            onClick={() => setShowSideNav(false)}
            className="side-nav__close-btn"
          >
            X
          </button>
        </div>
      )}

      <button className="nav__contact">Contact Us</button>
    </nav>
  );
}
