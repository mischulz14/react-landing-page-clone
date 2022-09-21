import './Companies.css';
import { useState } from 'react';

export default function Companies() {
  const [clicked, setClicked] = useState(true);
  return (
    <section className="companies">
      <img
        alt="flying-person"
        src="https://digitaltoucan.com/wp-content/uploads/2021/02/graphic-heading-clients.svg"
        className="flying-person"
      />
      <h2>Trusted by over 2000 companies from 80 countries.</h2>
      <div className="companies__container">
        {clicked && (
          <div className="companies__container-1">
            <img
              className="company-icon"
              src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-samsung.svg"
              alt="company-icon"
            />
            <img
              className="company-icon"
              src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-databricks.svg"
              alt="company-icon"
            />
            <img
              className="company-icon"
              src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-backbase.svg"
              alt="company-icon"
            />
            <img
              className="company-icon"
              src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-commerzbank.svg"
              alt="company-icon"
            />
            <img
              className="company-icon"
              src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-skatteministeriet.svg"
              alt="company-icon"
            />
            <img
              className="company-icon"
              src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-uwf.svg"
              alt="company-icon"
            />
          </div>
        )}
      </div>
      <div className="companies__buttons">
        <button className="switch-btn"></button>
        <button className="switch-btn"></button>
      </div>
    </section>
  );
}
