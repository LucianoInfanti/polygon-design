"use client";
import { GlobalStore } from "@/app/GlobalStore";
import Link from "next/link";
import Data from "../../Data/Data.json";
import { usePathname } from "next/navigation";
import TextReveal from "../TextReveal/TextReveal";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import Polygons from "../Polygons/Polygons";
import { useEffect, useState } from "react";

export const Header = () => {
  const { sideNum, colorGradient, clipPath } = GlobalStore((state) => state);

  const index = Data.findIndex(
    (obj) => obj.slug === usePathname().substring(1)
  );

  const rotationAnimationOuter = {
    rotate: {
      duration: 120, // rotation duration in seconds
      repeat: Infinity,
      ease: "linear", // constant speed
    },
  };

  const rotationAnimationInner = {
    rotate: {
      duration: 30, // rotation duration in seconds
      repeat: Infinity,
      ease: "linear", // constant speed
    },
  };

  const links = [
    {
      label: "Github",
      href: "https://github.com/LucianoInfanti/polygons-design",
    },
  ];

  return (
    <header>
      <div>
        <Link href={"/"}>
          {" "}
          <TextReveal text={"Back"} />
        </Link>
      </div>
      {colorGradient === "" ? <Polygons /> : null}
      <motion.div
        initial={{ scale: 0, rotate: -360 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 0.9 }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
      >
        <motion.div
          style={{
            width: "500px",
            height: "500px",
            clipPath: clipPath,
          }}
          animate={{ rotate: 360 }} // rotate 360 degrees
          transition={rotationAnimationOuter}
        >
          <motion.div
            style={{
              width: "500px",
              height: "500px",
              background: colorGradient,
            }}
            animate={{ rotate: -360 }} // rotate -360 degrees (opposite direction)
            transition={rotationAnimationInner}
          />
        </motion.div>
      </motion.div>

      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>
          <TextReveal disableShuffle={false} text={`${Data[index]?.title}`} />
        </h1>
        <span className={styles.published}>
          <TextReveal disableShuffle={false} text={`${Data[index]?.date}`} />
        </span>
      </div>
    </header>
  );
};
