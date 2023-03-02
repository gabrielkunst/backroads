import style from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
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
      <p>
        Copyright © Backroads Travel Tours Company <span>2023</span>. All Rights
        Reserved
      </p>
    </footer>
  );
}
