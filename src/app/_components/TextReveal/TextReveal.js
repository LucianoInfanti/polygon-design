import React, { useState, useEffect, useRef } from "react";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

const TextReveal = ({ text, disableShuffle }) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const originalText = useRef(text);
  const interval = 50;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, outputText]);

  const shuffle = (o) => {
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    return o;
  };

  const shuffleText = () => {
    if (disableShuffle) {
      return;
    }

    const elementTextArray = originalText.current.split("");
    let randomText;

    const totalDuration = 300;
    const numberOfIterations = 5;
    const iterationDuration = totalDuration / numberOfIterations;

    const repeatShuffle = (times, index) => {
      if (index === times) {
        setOutputText(originalText.current);
        return;
      }

      setTimeout(() => {
        randomText = shuffle(elementTextArray.slice(0));
        setOutputText(randomText.join(""));
        index++;
        repeatShuffle(times, index);
      }, iterationDuration);
    };
    repeatShuffle(numberOfIterations, 0);
  };

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }

  return (
    <span className="text-white" onMouseEnter={shuffleText}>
      {outputText}
      {remainder}
    </span>
  );
};

export default TextReveal;
