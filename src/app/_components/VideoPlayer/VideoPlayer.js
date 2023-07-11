import React from "react";
import Caption from "../Caption/Caption";
import { usePathname } from "next/navigation";
import Data from "../../Data/Data.json";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({
  fileName,
  slug,
  format,
  number,
  text,
  href,
  height,
  width,
}) => {
  const pathname = usePathname();
  const index = Data.findIndex((obj) => obj.slug === pathname.substring(1));

  return (
    <div className={styles.video_wrapper}>
      <video
        height={height}
        width={width}
        className={styles.video}
        autoPlay
        muted
        loop
      >
        <source
          src={`/Videos/${Data[index]?.slug}/${fileName}.${format}`}
          type="video/mp4"
        />
      </video>
      {text && <Caption number={number} href={href} text={text} />}
    </div>
  );
};

export default VideoPlayer;
