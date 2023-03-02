import style from "./Services.module.scss";
import Title from "../title/Title";
import { ServicesList } from "./ServicesData";
import Service from "./service/Service";

export default function Services() {
  return (
    <section className={style.services} id="tours">
      <Title normal="our" special="services" />
      <div className={style.servicesList}>
        {ServicesList.map((service, index) => {
          return <Service service={service} key={index} />;
        })}
      </div>
    </section>
  );
}
