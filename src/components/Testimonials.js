import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <div>
          <h2>Users love our Jira apps.</h2>
          <div className="testimonials__graphic-container">
            <img
              alt="graphic"
              src="https://digitaltoucan.com/wp-content/themes/digital-toucan/images/graphic-section-testimonials.svg"
              className="testimonials__graphic"
            />
          </div>
        </div>
        <div className="testimonials__container">
          <p className="testimonial__text">
            “Great add-on. It's very simple, the new additions to JQL are
            available everywhere. We use it everyday to define queues. Very good
            support as well. They respond almost instantly. They didn't try to
            sell their add-on, but suggested us how to solve the problem with
            what was already available in Jira.”
          </p>
          <div className="testimonial__name">-Neha Choudhary</div>
          <div className="testimonial__switch">
            <div className="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>1/4</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
