import style from "./About.module.scss";
import Image from "../../assets/about.jpeg";
import Title from "../title/Title";

export default function About() {
  return (
    <section className={style.about} id="about">
      <Title normal="about" special="us" />
      <div className={style.aboutImage}>
        <img src={Image} alt="Image" />
      </div>
      <div className={style.aboutText}>
        <h3>explore the difference</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab obcaecati
          nesciunt aperiam dicta nostrum odio accusantium rem vel porro nam?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab obcaecati
          nesciunt aperiam dicta nostrum odio accusantium rem vel porro nam?
        </p>
        <a href="#">read more</a>
      </div>
    </section>
  );
}
