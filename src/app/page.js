"use client";

import styles from "./page.module.css";
import Link from "next/link";
import TextReveal from "./_components/TextReveal/TextReveal";
import CurrentDate from "./_components/CurrentDate/CurrentDate";
import Data from "./Data/Data.json";
import { useEffect, useState, useRef } from "react";
import Polygons from "./_components/Polygons/Polygons";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStore } from "./GlobalStore";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const {
    colorGradient,
    clipPath,
    startPercentage,
    endPercentage,
    rotationDegree,
    gradient,
    sideNum,
  } = GlobalStore((state) => state);

  const stateRef = useRef({
    colorGradient,
    clipPath,
    startPercentage,
    endPercentage,
    rotationDegree,
    gradient,
    sideNum,
  });

  useEffect(() => {
    const unsubscribe = GlobalStore.subscribe((state) => state);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    countingIndex();
  }, []);

  const countingIndex = () => {
    let sum = 0;
    for (let i = 0; i < Data.length; i++) {
      sum += Data[i].id;
    }
    setCounter(sum);
  };

  const links = [
    { label: "Github", href: "https://github.com/LucianoInfanti/polygons-design" },
    // {
    //   label: "Subscribe",
    //   href: "https://www.linkedin.com/in/luciano-infanti/",
    // },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.first_col}>
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
        <div className={styles.date}>
          <CurrentDate />
        </div>
      </div>
      <div className={styles.second_col}>
        <div className={styles.article_wrapper}>
          {Data.map((article, index) => (
            <li
              className={styles.article_item}
              key={article.index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/${article.slug}`}>
                <TextReveal
                  disableShuffle={true}
                  text={`${String(index).padStart(3, "0")}.`}
                />
                <TextReveal text={`${article.title}`} />
              </Link>
              <AnimatePresence mode="wait">
                {hoveredIndex === index && (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{scale: 0, rotate: 360 }}
                    transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                    className={styles.polygon_wrapper}
                  >
                    <Polygons />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </div>

        <div className={styles.counter}>
          {" "}
          <TextReveal
            disableShuffle={true}
            text={`${String(counter).padStart(3, "0")}`}
          />
        </div>
      </div>
      <div className={styles.third_col}>
        {links.map((link) => (
          <li className={styles.li_wrapper} key={link.href}>
            <a target="_blank" href={link.href}>
              <TextReveal text={`${link.label}`} />
            </a>
          </li>
        ))}
      </div>
    </main>
  );
}
