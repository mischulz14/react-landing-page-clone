import './Cta.css';

export default function Cta() {
  return (
    <section className="cta">
      <button className="cta__button-articles">See all articles</button>
      <div className="cta__wrapper">
        <div className="cta__content">
          <p>Check out all our Jira apps on the Atlassian marketplace today.</p>
          <button className="cta__button-visit">
            Visit Atlassian Marketplace
          </button>
        </div>
        <img
          className="cta__icon"
          alt="women sitting with laptop"
          src="https://digitaltoucan.com/wp-content/themes/digital-toucan/images/graphic-section-marketplace.svg"
        />
      </div>
    </section>
  );
}
