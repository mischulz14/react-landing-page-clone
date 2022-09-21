import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
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
