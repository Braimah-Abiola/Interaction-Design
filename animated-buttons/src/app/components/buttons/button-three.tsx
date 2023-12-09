import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface GlowButtonProps {
  text: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ text }) => {
  return (
    <Link href="https://studioix.agency" className="cta">
      <div className="text">
        {text} <ArrowRight />
      </div>
    </Link>
  );
};

export default GlowButton;
