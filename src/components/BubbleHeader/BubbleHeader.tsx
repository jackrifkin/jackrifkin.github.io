import React, { useEffect, useRef, useState } from "react";
import "./BubbleHeader.css";
import NameSVG from "./NameSVG";

const SM_SCREEN_WIDTH = 576;
const MD_SCREEN_WIDTH = 768;
const SM_BUBBLE_SIZE = 12;
const REG_BUBBLE_SIZE = 20;

const BubbleHeader = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [finishedIntroAnimation, setFinishedIntroAnimation] =
    useState<boolean>(false);

  useEffect(() => {
    if (svgRef.current && bubblesRef) {
      const paths = svgRef.current.querySelectorAll("path");
      const bubbleSize =
        screenWidth < SM_SCREEN_WIDTH ? SM_BUBBLE_SIZE : REG_BUBBLE_SIZE;

      const listeners: (() => void)[] = [];
      paths.forEach((pathElement) => {
        const pathLength = pathElement.getTotalLength();
        for (let i = 0; i < pathLength; i += bubbleSize) {
          const point = pathElement.getPointAtLength(i);

          const bubble = document.createElement("img");
          bubble.src =
            screenWidth < SM_SCREEN_WIDTH
              ? "./bubble_tiny.svg"
              : "./bubble0.svg";
          bubble.className = "bubble";
          bubble.style.position = "absolute";
          bubble.style.left = `${point.x - bubbleSize / 2}px`;
          bubble.style.top = `${point.y - bubbleSize / 2}px`;

          const displacement = Math.floor(Math.random() * 51);
          const timing = Math.floor(Math.random() * 11) / 10;
          bubble.style.transform = `translateY(${70 + displacement}vh)`;
          bubble.style.transition = `transform ${1.3 + timing}s ease-out`;

          if (bubblesRef.current) {
            bubblesRef.current.appendChild(bubble);

            listeners.push(() => {
              const listener = () => {
                bubble.style.transform = "translateY(0)";
              };
              window.addEventListener("load", listener);
              return () => window.removeEventListener("load", listener);
            });

            listeners.push(() => {
              const listener = () => {
                bubble.style.animation = `bob ${
                  bubbleSize === REG_BUBBLE_SIZE ? 1.5 : 1.7
                }s infinite alternate ease-in-out`;
                setFinishedIntroAnimation(true);
              };
              bubble.addEventListener("transitionend", listener);
              return () =>
                bubble.removeEventListener("transitionend", listener);
            });
          }
        }
      });

      svgRef.current.innerHTML = "";

      return () => {
        listeners.forEach((removeListener) => removeListener());
      };
    }
  }, [svgRef, bubblesRef, screenWidth, finishedIntroAnimation]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <>
      <div className="header_container">
        <div className="bubbles_container" ref={bubblesRef}></div>
        {/* ----- Custom SVG for name ----- */}
        <NameSVG
          size={
            screenWidth < SM_SCREEN_WIDTH
              ? "sm"
              : screenWidth < MD_SCREEN_WIDTH
              ? "md"
              : "lg"
          }
          svgRef={svgRef}
        />
      </div>
    </>
  );
};

export default BubbleHeader;
