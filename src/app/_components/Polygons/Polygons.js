"use strict";
import { useEffect, useState } from "react";
import { GlobalStore } from "@/app/GlobalStore";
import { motion } from "framer-motion";

const Polygons = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });

  const { colorGradient, clipPath, updateProperties } = GlobalStore(
    (state) => state
  );

  useEffect(() => {
    updateProperties();
  }, []);

  const rotationAnimationOuter = {
    rotate: {
      duration: 120, // rotation duration in seconds
      loop: Infinity, // loop indefinitely
      ease: "linear", // constant speed
    },
  };

  const rotationAnimationInner = {
    rotate: {
      duration: 30, // rotation duration in seconds
      loop: Infinity, // loop indefinitely
      ease: "linear", // constant speed
    },
  };
  return (
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
  );
};

export default Polygons;
