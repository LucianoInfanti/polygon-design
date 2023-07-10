"use client";

import styles from "./page.module.css";
import Link from "next/link";
import TextReveal from "../../_components/TextReveal/TextReveal";
import CurrentDate from "../../_components/CurrentDate/CurrentDate";
import Data from "../../Data/Data.json";
import { useEffect, useState, useRef } from "react";
import Polygons from "../../_components/Polygons/Polygons";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStore } from "../../GlobalStore";
import { Header } from "@/app/_components/Header/Header";
import { Paragraph } from "@/app/_components/Paragraph/Paragraph";
import { LinkComponent } from "@/app/_components/LinkComponent/LinkComponent";
import Logo from "@/app/_components/Logo/Logo";

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
    {
      label: "Github",
      href: "https://github.com/LucianoInfanti/polygons-design",
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.first_col}>
        <div className={styles.logo}>
          <Logo></Logo>
        </div>
        <div className={styles.date}>
          <CurrentDate />
        </div>
      </div>
      <div className={styles.second_col}>
        <Header />
        <div className={styles.article_wrapper}>
          <Paragraph>
            Locking your layers is like throwing down some sand for traction. It
            secures everything in place, helping you avoid those &apos;Oops, I
            didn&apos;t mean to move that&apos; moments. Or something like
            realising an animation is wrong &apos;cause something is out of
            place but you don&apos;t know{" "}
            <LinkComponent href={"google.com"} text={"this link"} /> or where
            that thing. Again, the Protopie canvas is not as friendly. Plus, it
            saves time in the long run by reducing unnecessary adjustments.⁠
          </Paragraph>
        </div>
      </div>
      <div className={styles.third_col}>
        <div className={styles.links_wrapper}>
          {links.map((link) => (
            <li className={styles.li_wrapper} key={link.href}>
              <a target="_blank" href={link.href}>
                <TextReveal text={`${link.label}`} />
              </a>
            </li>
          ))}
        </div>
      </div>
    </main>
  );
}
