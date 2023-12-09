import Link from "next/link";
import React from "react";

interface FlowButtonProps {
  text: string;
}

const FlowButton: React.FC<FlowButtonProps> = ({ text }) => {
  return (
    <Link className="flow" href="https://www.studioix.agency">
      <div className="flow-button">{text}</div>
      <div className="flow-button-backdrop"></div>
    </Link>
  );
};

export default FlowButton;
