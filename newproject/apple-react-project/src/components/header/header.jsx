import logo from "../images/icons/logo.png";
import search from "../images/icons/search-icon.png";
import cart from "../images/icons/cart.png";

function Header() {
    return (
      <header className="header-wrapper">
    <div className="internal-wrapper">
      <div className="header-links-wrapper">
        <ul>
          <li className="logo-link">
            <a href="#">
              <img src={logo} />
            </a>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li className="search-link">
            <a href="#">
              <a href="#">
                <img src={search} />
              </a>
            </a>
          </li>
          <li className="cart-link">
            <a href="#">
              <a href="#">
                <img src={cart} />
              </a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header;
