import './Hero.css';

/* Adding an event listener to the window object. The event listener is listening for the scroll event.
When the scroll event is triggered, the callback function is executed. The callback function is
selecting the hero section and the nav section. It is then getting the coordinates of the hero
section. If the y coordinate of the hero section is 0, the active class is removed from the nav
section. If the y coordinate of the hero section is not 0, the active class is added to the nav
section. */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-section');
  const nav = document.querySelector('.nav');
  const heroCoords = hero.getBoundingClientRect();
  if (heroCoords.y === 0) nav.classList.remove('active');
  else nav.classList.add('active');
});

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="wrapper">
        <h2>Bring your Jira data to life.</h2>
        <p>
          Our Jira apps help you get the very best out of your teams and
          projects
        </p>
      </div>
    </section>
  );
}
