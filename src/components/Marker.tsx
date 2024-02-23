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
  type: "text" | "icon";
}

const Marker: React.FC<MarkerProps> = ({ children, type }) => {
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
    if (markerRef.current && children) {
      const svgElement = markerRef.current.querySelector(
        ".circle"
      ) as SVGElement;
      if (svgElement) {
        const rect = markerRef.current.getBoundingClientRect();
        let width = rect.width;
        let height = 2 * rect.height;

        if (type === "icon") {
          width = rect.width * 2.5;
          height = rect.height * 2;
          svgElement.style.left = "-50%";
        }

        svgElement.style.width = width.toString();
        svgElement.style.height = height.toString();

        svgElement.style.transform = `scale(${(1.8 * width) / height}, 1)`;

        svgElement.setAttribute("width", width.toString());
        svgElement.setAttribute("height", height.toString());
        svgElement.setAttribute("viewBox", "-1 -1 2 2");
      }
    }
  }, [children, type]);

  return (
    <div ref={markerRef} onMouseEnter={onMouseOver} className="marker group">
      {children}
      <svg className="circle">
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
