import style from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={style.hero}>
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
