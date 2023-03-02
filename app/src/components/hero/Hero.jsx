import style from "./Hero.module.scss";
import Video from "../../assets/video.mp4";

export default function Hero() {
  return (
    <section className={style.hero}>
      <video autoplay muted loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <h1 className={style.heroTitle}>continue exploring</h1>
      <p className={style.heroDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et cum
        quibusdam, sapiente debitis velit?
      </p>
      <a href="#" className={style.heroLink}>
        explore tours
      </a>
    </section>
  );
}
