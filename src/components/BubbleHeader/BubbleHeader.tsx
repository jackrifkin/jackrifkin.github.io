import React, { useEffect, useRef } from "react";
import "./BubbleHeader.css";

const BubbleHeader = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (svgRef.current && bubblesRef) {
      const paths = svgRef.current.querySelectorAll("path");
      const interval = 20;

      paths.forEach((pathElement) => {
        const pathLength = pathElement.getTotalLength();
        for (let i = 0; i < pathLength; i += interval) {
          const point = pathElement.getPointAtLength(i);

          const bubble = document.createElement("img");
          bubble.src = "./bubble0.svg";
          bubble.className = "bubble";
          bubble.style.position = "absolute";
          bubble.style.left = `${point.x - 10}px`;
          bubble.style.top = `${point.y - 10}px`;

          const displacement = Math.floor(Math.random() * 51);
          bubble.style.transform = `translateY(${70 + displacement}vh)`;

          if (bubblesRef.current) {
            bubblesRef.current.appendChild(bubble);
            setTimeout(() => {
              bubble.style.transform = "translateY(0)";
            }, 100);
          }
        }
      });
      svgRef.current.innerHTML = "";
    }
  }, [svgRef, bubblesRef]);

  return (
    <div className="header_container">
      <div className="bubbles_container" ref={bubblesRef}></div>
      {/* ----- Custom SVG for name ----- */}
      <svg
        ref={svgRef}
        width="776"
        height="127"
        viewBox="0 0 776 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.4999 6.5V75.5C54.4999 81 50 108.625 27.5 107.5C5.00001 106.375 6.33333 77.3333 6 77M86.4997 55.5C91.4997 52.3333 109.606 42.5084 120 55.5C124.553 61.1914 125.552 69.4559 126 77.5C125.766 82.4459 126 100.099 126 104M114.5 83.5L103 74C94.5 74 81.5 82.7 81.5 89.5C81.5 98 88.2041 106.588 95.5 107.5C102.34 108.355 113.5 107.5 114.5 97"
          stroke="none"
          stroke-width="12"
          stroke-linecap="round"
        />
        <path
          d="M212.053 57.286C189.014 37.8321 163.106 52.6289 168.023 81.9161C173.156 112.488 200.276 107.935 218.51 95.7476"
          stroke="none"
          stroke-width="14"
          stroke-linecap="round"
        />
        <path
          d="M245.5 24.5V104.5M296.5 36L259 77.5L295 116"
          stroke="none"
          stroke-width="14"
          stroke-linecap="round"
        />
        <path
          d="M591 24V104M642 35.5L604.5 77L640.5 115.5"
          stroke="none"
          stroke-width="14"
          stroke-linecap="round"
        />
        <path
          d="M379 103V27.5V19.5M390 66.5H416C441.5 59.5 440 32 416 25.5H390M423 80.5L438.5 113"
          stroke="none"
          stroke-width="14"
          stroke-linecap="round"
        />
        <path
          d="M479.5 62V115.5M479 14.5L479.5 35.5"
          stroke="none"
          stroke-width="14"
          stroke-linecap="round"
        />
        <path
          d="M669.5 61V116M669 15L669.5 36"
          stroke="none"
          stroke-width="14"
          stroke-linecap="round"
        />
        <path
          d="M716 47.3542V110.354M768.5 119.354C768.5 105.854 768.855 66.3539 765.5 59.8539C757.5 44.3539 734.5 47.8539 730.5 59.8539"
          stroke="none"
          stroke-width="14"
          stroke-linecap="round"
        />
        <path
          d="M531.5 106.061V41.061C532.167 36.2276 527.5 -7.5 573 13M541 55.061L559.5 55.061M522 55.061L505.5 55.061"
          stroke="none"
          stroke-width="14"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default BubbleHeader;
