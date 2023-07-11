import style from "./LinkComponent.module.css";

export const LinkComponent = ({ href, text }) => {
  return (
    <a className={style.wrapper} href={href} target="_blank">
      {text}
    </a>
  );
};
