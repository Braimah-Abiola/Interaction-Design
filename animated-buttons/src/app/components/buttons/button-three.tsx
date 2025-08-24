import React from "react";

interface FlipButtonProps {
  text?: string;
  href?: string;
}

const FlipButton: React.FC<FlipButtonProps> = ({ text = "Stack Sorted.", href }) => {
  const content = (
    <>
      {/* First span - visible by default, rotates out on hover */}
      <span className="flip-span">
        <em className="flip-text flip-text-1">
          {text}
        </em>
      </span>

      {/* Second span - hidden by default, rotates in on hover */}
      <span className="flip-span flip-span-2">
        <em className="flip-text flip-text-2">
          {text}
        </em>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flip-button">
        {content}
      </a>
    );
  }

  return (
    <button className="flip-button">
      {content}
    </button>
  );
};

export default FlipButton;
