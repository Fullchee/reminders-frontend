import React from "react";
import "./SpeedController.scss";

interface SpeedControllerProps {
  speed: number;
  onChange: (speed: number) => void;
}

export function SpeedController({ speed, onChange }: SpeedControllerProps) {
  return (
    <select
      className="speed-controller"
      onChange={(e) => {
        onChange(parseFloat(e.target.value));
      }}
      value={speed}
    >
      <option value="0.5">0.5x</option>
      <option value="0.9">0.9x</option>
      <option value="1">1x</option>
      <option value="1.25">1.25x</option>
      <option value="1.5">1.5x</option>
      <option value="1.75">1.75x</option>
      <option value="2">2x</option>
      <option value="2.25">2.25x</option>
      <option value="2.5">2.5x</option>
      <option value="2.75">2.75x</option>
    </select>
  );
}
