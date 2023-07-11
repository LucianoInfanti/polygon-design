import styles from "./Caption.module.css";

function Caption({ number, text, href }) {
  return (
    <caption className={styles.caption}>
      <span className={styles.number}>[{number}]</span>·{" "}
      {href ? (
        <a target="_blank" href={`${href}`}>
          {text}
        </a>
      ) : (
        text
      )}
    </caption>
  );
}

export default Caption;
