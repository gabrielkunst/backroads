import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbarLogo">
        <img src={Logo} alt="Logo" />
      </span>
      <ul className="navbarLinks">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#tours">tours</a>
        </li>
      </ul>
      <ul className="navbarSocials">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
