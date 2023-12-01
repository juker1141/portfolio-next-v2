"use client";
import { useEffect, useRef } from "react";

function circlePath(
  dr_min: number,
  dr_max: number,
  θ0_min: number,
  θ0_max: number,
  dθ_min: number,
  dθ_max: number
) {
  var c = 0.551915024494,
    β = Math.atan(c),
    d = Math.sqrt(c * c + 1 * 1),
    r = 0.9,
    θ = ((θ0_min + Math.random() * (θ0_max - θ0_min)) * Math.PI) / 180,
    path = "M";

  path += [r * Math.sin(θ), r * Math.cos(θ)];
  path += " C" + [d * r * Math.sin(θ + β), d * r * Math.cos(θ + β)];

  for (var i = 0; i < 4; i++) {
    θ += (Math.PI / 2) * (1 + dθ_min + Math.random() * (dθ_max - dθ_min));
    r *= 1 + dr_min + Math.random() * (dr_max - dr_min);
    path +=
      " " + (i ? "S" : "") + [d * r * Math.sin(θ - β), d * r * Math.cos(θ - β)];
    path += " " + [r * Math.sin(θ), r * Math.cos(θ)];
  }
  return path;
}

interface MarkerProps {
  children: React.ReactNode;
}

const Marker: React.FC<MarkerProps> = ({ children }) => {
  const markerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const onMouseOver = () => {
    const pathEl = pathRef.current;

    if (pathEl) {
      const pathLength = 1000 * pathEl.getTotalLength();
      // Set path attributes and styles
      pathEl.setAttribute("d", circlePath(-0.15, 0.05, 150, 190, 0.05, 0.3));
      pathEl.setAttribute("stroke-dasharray", pathLength.toString());
      pathEl.setAttribute("stroke-dashoffset", pathLength.toString());
    }
  };

  useEffect(() => {
    if (markerRef.current) {
      const svgElement = markerRef.current.querySelector("svg");
      if (svgElement) {
        const rect = markerRef.current.getBoundingClientRect(),
          width = rect.width,
          height = 2 * rect.height;
        svgElement.style.width = width.toString();
        svgElement.style.height = height.toString();

        svgElement.style.transform = `scale(${(1.8 * width) / height}, 1)`;

        svgElement.setAttribute("width", width.toString());
        svgElement.setAttribute("height", height.toString());
        svgElement.setAttribute("viewBox", "-1 -1 2 2");
      }
    }
  }, []);

  return (
    <div
      ref={markerRef}
      // onMouseEnter={handleMouseEnter}
      onMouseOver={onMouseOver}
      className={`marker mx-4 my-2 group`}
    >
      {children}
      <svg>
        <path
          ref={pathRef}
          pathLength="100"
          vectorEffect="non-scaling-stroke"
          className="invisible group-hover:visible"
        />
      </svg>
    </div>
  );
};

export default Marker;
