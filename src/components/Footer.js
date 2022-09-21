import './Footer.css';

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div>
          <img
            className="footer__logo"
            alt="icon"
            src="https://digitaltoucan.com/wp-content/uploads/2022/06/logo-digital-toucan-v2.svg"
          />
          <p>
            Key members of the Digital Toucan team were part of Atlassian's Jira
            development arm for over 8 years. We built some of the core features
            of the product and have developed some of the most successful and
            popular add-ons on the Atlassian Marketplace.
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="linkedIn footer__icon"
              viewBox="0 0 512 512"
            >
              <title>Logo Linkedin</title>
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mail footer__icon"
              viewBox="0 0 512 512"
            >
              <title>Mail</title>
              <rect
                x="48"
                y="96"
                width="416"
                height="320"
                rx="40"
                ry="40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M112 160l144 112 144-112"
              />
            </svg>
          </div>
        </div>
        <div>
          <h3>Jira Apps</h3>
          <ul className="footer__list">
            <li className="footer__list__item">OKR for Jira</li>
            <li className="footer__list__item">
              JQL Search Extensions for Jira
            </li>
            <li className="footer__list__item">Goals for Jira</li>
            <li className="footer__list__item">Panorama for Jira</li>
          </ul>
        </div>
        <div>
          <h3>Quicklinks</h3>
          <ul className="footer__list">
            <li className="footer__list__item">About Us</li>
            <li className="footer__list__item">Blog</li>
            <li className="footer__list__item">Support</li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul className="footer__list">
            <li className="footer__list__item">EULA</li>
            <li className="footer__list__item">Data Processing Addendum</li>
            <li className="footer__list__item">Security Statement</li>
            <li className="footer__list__item">SLA</li>
            <li className="footer__list__item">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <span className="divider" />
      <span className="copyright">
        Copyright © 2022 Digital Toucan. All Rights Reserved.
      </span>
    </section>
  );
}
