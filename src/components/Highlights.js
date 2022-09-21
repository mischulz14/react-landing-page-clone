import './Highlights.css';

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights__wrapper">
        <div className="highlights__grid">
          <div className="highlight__container grid-left">
            <h4>Highlight</h4>
            <img
              src="https://digitaltoucan.com/wp-content/uploads/2021/12/pexels-adonyi-gabor-14092161-512x341.jpg"
              alt="tools"
            />
            <p>The Top 10 OKR Tools and How to Choose the Best One</p>
            <a href="/" className="highlight__link">
              Read Article{' '}
            </a>
          </div>
          <div className="highlight__container grid-right-top">
            <img
              src="https://digitaltoucan.com/wp-content/uploads/2021/12/pexels-andrea-piacquadio-3763878-512x341.jpg"
              alt="tools"
            />
            <p>Four Common OKR Problems and How to Fix Them</p>
            <a href="/" className="highlight__link">
              Read Article{' '}
            </a>
          </div>
          <div className="highlight__container grid-right-bottom">
            <img
              src="https://digitaltoucan.com/wp-content/uploads/2022/01/OKR-planning-meeting-512x341.jpg"
              alt="tools"
            />
            <p>
              [Free OKR Templates Inside] How to Make OKRs Work for Your Company
            </p>
            <a href="/" className="highlight__link">
              Read Article{' '}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
