import style from "./Tours.module.scss";
import { ToursList } from "./ToursData";
import Tour from "./tour/Tour";
import Title from "../title/Title";

export default function Tours() {
  return (
    <section className={style.tours} id="tours">
      <Title normal="featured" special="tours" />
      {ToursList.map((tour, index) => {
        return <Tour {...tour} key={index} />;
      })}
    </section>
  );
}
