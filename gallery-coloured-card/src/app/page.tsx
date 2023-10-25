"use client";

import { projects } from "@/constants";
import gsap from "gsap";

export default function Home() {
  const manageMouseEnter = (e: React.MouseEvent, index: number) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e: React.MouseEvent, index: number) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div className="container">
      <div className="projectContainer">
        {projects.map((project, index) => {
          return (
            <div
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              key={index}
            >
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
