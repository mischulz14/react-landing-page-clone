import './ProductSection.css';

export default function ProductSection() {
  return (
    <section className="products">
      <div className="products__heading-container">
        <h2 className="products__heading">
          Help your teams find success with Jira.
        </h2>
        <p>
          From enhancing searchability to prioritizing objectives and goals, our
          apps improve the Jira experience for teams around the world.
        </p>
      </div>
      <div className="products__wrapper">
        <div className="product__card margin-bottom">
          <img
            src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-jql-search-extensions-for-jira.svg"
            className="product__icon"
            alt="icon"
          />
          <img
            src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-jql-search-extensions-for-jira.jpg"
            className="product__img margin-right"
            alt="product"
          />
          <h3 className="product__heading">JQL Search Extensions for Jira</h3>
          <p className="product__description">
            Find all your issues with over 50 JQL search extensions. Search Jira
            comments, subtasks, attachments, versions and links.
          </p>
          <a href="/" className="product__link">
            Learn more{' '}
          </a>
        </div>

        <div className="product__card margin-top">
          <img
            src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-okr-for-jira.svg"
            className="product__icon"
            alt="icon"
          />
          <img
            src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-okr-for-jira.jpg"
            className="product__img"
            alt="product"
          />
          <h3 className="product__heading">OKR for Jira</h3>
          <p className="product__description">
            Easily organize and prioritize objectives at every level and give
            you and your teams the visibility they need to keep track of key
            results.
          </p>
          <a href="/" className="product__link">
            Learn more{' '}
          </a>
        </div>

        <div className="product__card margin-bottom">
          <img
            src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-panaroma-for-jira.svg"
            className="product__icon"
            alt="icon"
          />
          <img
            src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-panorama-for-jira.jpg"
            className="product__img margin-right"
            alt="product"
          />
          <h3 className="product__heading">Panorama for Jira</h3>
          <p className="product__description">
            Get a big-picture view of your projects and epics. Easily create
            multilevel, structured hierarchies to manage projects and track
            progress across teams.
          </p>
          <a href="/" className="product__link">
            Learn more{' '}
          </a>
        </div>

        <div className="product__card margin-top">
          <img
            src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-okr-for-jira.svg"
            className="product__icon"
            alt="icon"
          />
          <img
            src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-goals-for-jira.jpg"
            className="product__img"
            alt="product"
          />
          <h3 className="product__heading">Goals for Jira</h3>
          <p className="product__description">
            Keep your teams focused on success. Easily create powerful
            dashboards to track progress on your project and sprint goals in
            Jira.
          </p>
          <a href="/" className="product__link">
            Learn more{' '}
          </a>
        </div>
      </div>
    </section>
  );
}
