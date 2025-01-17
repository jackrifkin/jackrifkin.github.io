import React from "react";
import "./BubbleHeader.css";
import NameSVG from "./NameSVG";
import useBubbleHeader from "../../hooks/useBubbleHeader";
import { MD_SCREEN_WIDTH, SM_SCREEN_WIDTH } from "../../constants";

const BubbleHeader = () => {
  const { svgRef, bubblesRef, screenWidth } = useBubbleHeader();

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
