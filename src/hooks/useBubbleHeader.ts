import { useEffect, useRef, useState } from "react";
import { SM_SCREEN_WIDTH } from "../constants";

const SM_BUBBLE_SIZE = 12;
const REG_BUBBLE_SIZE = 20;
const MIN_MOUSE_PROXIMITY = 100;

const useBubbleHeader = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (svgRef.current && bubblesRef) {
      const paths = svgRef.current.querySelectorAll("path");
      const bubbleSize =
        screenWidth < SM_SCREEN_WIDTH ? SM_BUBBLE_SIZE : REG_BUBBLE_SIZE;

      const removeListeners: (() => void)[] = [];
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

            const loadListener = () => {
              bubble.style.transform = "translateY(0)";
            };
            window.addEventListener("load", loadListener);
            removeListeners.push(() => {
              window.removeEventListener("load", loadListener);
            });

            const transitionend_listener = () => {
              bubble.style.animation = `bob ${
                bubbleSize === REG_BUBBLE_SIZE ? 1.5 : 1.7
              }s infinite alternate ease-in-out`;
              bubble.style.transition = `transform ${1.3 + timing}s ease-out`;
            };
            bubble.addEventListener("transitionend", transitionend_listener);
            removeListeners.push(() => {
              bubble.removeEventListener(
                "transitionend",
                transitionend_listener
              );
            });

            const handleMouseMove = (event: MouseEvent) => {
              const bubbleRect = bubble.getBoundingClientRect();
              const bubbleRadius = bubbleSize / 2;
              const mouseX = event.clientX - bubbleRect.left + bubbleRadius;
              const mouseY = event.clientY - bubbleRect.top + bubbleRadius;
              const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

              if (distance > MIN_MOUSE_PROXIMITY) return;
              const dx = bubbleRadius - mouseX;
              const dy = bubbleRadius - mouseY;

              const angle = Math.atan2(dy, dx);
              const force = MIN_MOUSE_PROXIMITY - distance;
              const moveX = Math.cos(angle) * force;
              const moveY = Math.sin(angle) * force;

              bubble.style.animation = "";
              bubble.style.transition = "transform 0.3s ease-out";
              bubble.style.transform = `translate(${moveX}px, ${moveY}px)`;
              setTimeout(() => {
                bubble.style.transition = "transform 0.3s ease-in-out";
                bubble.style.transform = "translate(0, 0)";
              }, 300);
            };
            window.addEventListener("mousemove", handleMouseMove);
            removeListeners.push(() => {
              window.removeEventListener("mousemove", handleMouseMove);
            });
          }
        }
      });

      svgRef.current.innerHTML = "";

      return () => {
        removeListeners.forEach((removeListener) => removeListener());
      };
    }
  }, [svgRef, bubblesRef, screenWidth]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { svgRef, bubblesRef, screenWidth };
};

export default useBubbleHeader;
