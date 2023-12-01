"use client";
import { useState, useRef, useEffect } from "react";

const random = (from: number, to: number) =>
  Math.floor(Math.random() * (to - from) + from);

const underlinePath = (height: number) => {
  let lines = random(2, 4);
  let d = `M ${random(-5, 15)} ${random(-2, 2)}`;
  let line = 0;

  // Draw the lines
  while (line++ < lines) {
    const y = line * (height / lines); // Draw every line lower than the previous one
    d +=
      ` Q ${random(30, 70)}` + // The x coordinate of the curve's center
      ` ${random(y - 5, y + 5)}` + // The y coordinate of the curve's center
      ` ${line % 2 === 0 ? random(-5, 15) : random(85, 105)}` + // The x coordinate of the curve's end, alternating between right to left based on the current line number
      ` ${random(y - 2, y + 2)}`; // The y coordinate of the curve's end
  }
  return d;
};

const Underline = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: string;
}) => {
  const strokeWidth = random(16, 20) / 100;
  const height = random(4, 8);
  const path = underlinePath(height);

  return (
    <div className="pen-stroke">
      {children}
      <svg
        viewBox={`0 0 100 ${height}`}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          style={{ animationDelay: delay }}
          d={path}
          strokeWidth={`${strokeWidth}em`}
        />
      </svg>
    </div>
  );
};

export default Underline;
