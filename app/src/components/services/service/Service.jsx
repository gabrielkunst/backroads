import style from "../Services.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Service({ service }) {
  return (
    <article className={style.servicesCard}>
      <span>
        <FontAwesomeIcon icon={service.icon} />
      </span>
      <div>
        <h4>{service.title}</h4>
        <p>{service.desc}</p>
      </div>
    </article>
  );
}
