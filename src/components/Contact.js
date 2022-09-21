import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <img
        alt="toucan"
        src="https://digitaltoucan.com/wp-content/themes/digital-toucan/images/graphic-heading-style-1.svg"
        className="contact__icon"
      />
      <h2 className="contact__heading">
        Want to get in touch? <br />
        Let's talk!
      </h2>
      <button className="contact__btn">Contact Us</button>
    </section>
  );
}
