import React from "react";

interface ProgressBarProps {
  progress: number; // value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 h-1 w-full z-[10000]">
      <div
        className="h-full bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] transition-all duration-[100ms] shadow-[0_1px_5px_rgba(94,96,206,0.3)]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
