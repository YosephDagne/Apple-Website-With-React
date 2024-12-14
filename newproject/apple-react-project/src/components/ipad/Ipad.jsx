import newipad from "../images/icons/new-ipad-logo.png";
const Ipad = () => {
  return (
    <section className="sixth-highlight-wrapper">
      <div className="left-side-wrapper">
        <div className="model">16-inch model</div>

        <div className="product-title-small">MacBook Pro</div>

        <div className="description-wrapper">The best for the brightest.</div>

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
      <div className="right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={newipad} />
          </div>
        </div>

        <div className="description-wrapper">
          Like a computer. Unlike any computer.
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
}

export default Ipad
