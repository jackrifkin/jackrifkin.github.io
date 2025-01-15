import React from "react";

interface TitleBubbleProps {
  title: string;
}

const TitleBubble = ({ title }: TitleBubbleProps) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default TitleBubble;
