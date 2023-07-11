import { useState, useEffect } from "react";
import TextReveal from "../TextReveal/TextReveal";

const addLeadingZeros = (value) => {
  if (value < 10) {
    return String(value).padStart(2, "0");
  } else {
    return String(value);
  }
};

const Hours = ({ hours }) => {
  return <TextReveal key={hours} text={addLeadingZeros(hours)} />;
};

const Minutes = ({ minutes }) => {
  return <TextReveal key={minutes} text={addLeadingZeros(minutes)} />;
};

const Seconds = ({ seconds }) => {
  return <TextReveal key={seconds} text={addLeadingZeros(seconds)} />;
};

const CurrentDate = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (date === null) {
    return <div></div>;
  }

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let currentDate = `${month}/${day}/${year}`;

  return (
    <div>
      <TextReveal key={currentDate} text={currentDate} disableShuffle={true} />{" "}
      · <Hours hours={hours} disableShuffle={true} />:
      <Minutes minutes={minutes} disableShuffle={true} />:
      <Seconds seconds={seconds} disableShuffle={true} />
    </div>
  );
};

export default CurrentDate;
