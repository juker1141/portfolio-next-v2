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

const Underline = ({ children }: { children: React.ReactNode }) => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  // const [svgheight, setHeight] = useState<number>(0);
  const strokeWidth = random(16, 20) / 100;

  useEffect(() => {
    const height = random(4, 8);
    if (underlineRef.current) {
      const svgElement = underlineRef.current.querySelector("svg");
      if (svgElement) {
        const rect = underlineRef.current.getBoundingClientRect(),
          width = rect.width,
          height = 2 * rect.height;
        svgElement.style.width = width.toString();
        svgElement.style.height = height.toString();

        // svgElement.style.transform = `scale(${(1.8 * width) / height}, 1)`;

        svgElement.setAttribute("width", width.toString());
        svgElement.setAttribute("height", height.toString());
        svgElement.setAttribute("viewBox", "-1 -1 2 2");
      }
    }
    if (pathRef.current) {
      setHeight(random(4, 8));
      const pathEl = pathRef.current;

      if (pathEl) {
        const pathLength = 1000 * pathEl.getTotalLength();

        // Set path attributes and styles
        // pathEl.style("", pathLength.toString());
        // pathEl.setAttribute("stroke-dashoffset", pathLength.toString());
        pathEl.style.strokeDasharray = pathLength.toString();
        pathEl.style.strokeDashoffset = pathLength.toString();
        pathEl.setAttribute("d", underlinePath(height));
      }
    }
  }, [pathRef]);

  return (
    <div ref={underlineRef} className="pen-stroke">
      {children}
      <svg>
        <path ref={pathRef} />
      </svg>
    </div>
  );
};

export default Underline;
