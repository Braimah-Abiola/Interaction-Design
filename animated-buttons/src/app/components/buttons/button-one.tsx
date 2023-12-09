import { ArrowRightCircle } from "lucide-react";
import React from "react";

interface ThreadsButtonProps {
  text: string;
}

const ThreadsButton: React.FC<ThreadsButtonProps> = ({ text }) => {
  return (
    <div className="thread-button-backdrop">
      <button className="thread-button" type="submit">
        {text}
        <ArrowRightCircle />
      </button>
    </div>
  );
};

export default ThreadsButton;
