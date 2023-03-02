import style from "./Title.module.scss";

export default function Title({ normal, special }) {
  return (
    <h2>
      {normal}
      <span> {special} </span>
    </h2>
  );
}
