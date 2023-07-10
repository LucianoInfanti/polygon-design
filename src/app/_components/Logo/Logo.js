import Link from "next/link";
import styles from "./Logo.module.css";
import TextReveal from "../TextReveal/TextReveal";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href={"/"}>
        <TextReveal text={"Polygons [·] Design"} />
      </Link>
      <a
        className={styles.author}
        target="_blank"
        href={"https://www.linkedin.com/in/luciano-infanti/"}
      >
        <TextReveal text={"By Luciano Infanti"} />
      </a>
    </div>
  );
};

export default Logo;
