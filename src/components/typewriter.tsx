"use client";

import { useState } from "react";

interface TypewriterProps {
  texts: string[];
  className?: string;
}

function Typewriter(props: TypewriterProps) {
  const [index, setIndex] = useState(0);

  return (
    <h1
      className={`font-mono w-0 whitespace-nowrap overflow-hidden animate-[typing_6s_linear_1s_infinite] ${props.className}`}
      onAnimationIteration={() => setIndex((index + 1) % props.texts.length)}
    >
      {props.texts[index]}
    </h1>
  );
}

export default Typewriter;
