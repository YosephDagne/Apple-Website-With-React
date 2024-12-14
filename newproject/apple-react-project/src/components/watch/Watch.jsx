import applecard from "../images/home/apple-card.jpg";
import watchseries5 from "../images/icons/watch-series5-logo.png";

const Watch = () => {
  return (
    <section className="fourth-highlight-wrapper">
      <div className="left-side-wrapper">
        <div className="top-logo-wrapper">
          <img src={watchseries5} alt="Watch Series 5 Logo" />
        </div>
        <div className="description-wrapper">
          {/* Corrected className name from 'description-wrapper' to 'description-wrapper' */}
          With new Always-On Retina display. <br />
          You've never seen a watch like this.
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-side-wrapper">
        {/*  Fixed the indentation for clarity  */}
        <div className="top-logo-wrapper">
          <img src={applecard} alt="Apple Card" />
        </div>
        <div className="description-wrapper">
          {/* <!-- Corrected className name --> */}
          Get 3% Daily on purchases from Apple using Card.
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Watch;
