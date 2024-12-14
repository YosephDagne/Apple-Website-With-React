import applelogo from "../images/icons/apple-tv-logo.png";
import servantlogo from "../images/icons/servant-logo.png";
const AirPods = () => {
  return (
    <section className="fifth-highlight-wrapper">
      <div className="left-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={applelogo} />
          </div>
        </div>

        <div className="tvshow-logo-wrapper">
                  <img src={servantlogo } />
        </div>

        <div className="watch-more-wrapper">
          <a href="#">Watch the trailer</a>
        </div>
      </div>
      <div className="right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">AirPods Pro</div>
        </div>

        <div className="description-wrapper">
          Magic like you’ve never heard.
        </div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AirPods;
