import './Navbar.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [change, setChange] = useState(false);

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
      <ul className="nav__list">
        <li>Jira Apps</li>
        <li>About Us</li>
        <li>Resources</li>
        <li>Support</li>
        <li>
          <img
            className="nav__logo"
            alt="logo"
            src="https://digitaltoucan.com/wp-content/uploads/2022/06/logo-digital-toucan-v2.svg"
          />
        </li>
      </ul>

      <button className="nav__contact">Contact Us</button>
    </nav>
  );
}
