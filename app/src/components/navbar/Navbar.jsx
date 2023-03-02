import style from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <span className={style.navbarLogo}>
        <img src={Logo} alt="Logo" />
      </span>
      <ul className={style.navbarLinks}>
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
      <ul className={style.navbarSocials}>
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
      <span className={style.navbarHamburger}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
}
