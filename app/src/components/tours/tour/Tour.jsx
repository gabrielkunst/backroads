import style from "../Tours.module.scss";
export default function Tour(tour) {
  return (
    <article className={style.tour}>
      <div className={style.tourImage}>
        <img src={tour.image} alt="" />
        <span>{tour.date}</span>
      </div>
      <div className={style.tourText}>
        <h4>{tour.title}</h4>
        <p>{tour.desc}</p>
        <div>
          <span>{tour.place}</span>
          <span>{tour.price}</span>
          <span>{tour.time}</span>
        </div>
      </div>
    </article>
  );
}
