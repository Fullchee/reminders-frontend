import React, { useRef, useState } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import { SpeedController } from "./SpeedController/SpeedController";

interface AudioPlayerProps {
  url: string;
  startTime: number;
}

function AudioPlayer({ url, startTime }: AudioPlayerProps) {
  const [speed, setSpeed] = useState(1);
  // let playerRef: H5AudioPlayer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let playerRef: any = useRef(null);
  console.log("🚀 ~ AudioPlayer ~ playerRef:", playerRef);
  const updateSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    playerRef.audio.current.playbackRate = newSpeed;
  };
  return (
    <>
      <H5AudioPlayer
        ref={(c) => (playerRef = c)}
        src={url}
        progressJumpSteps={{ backward: 15000, forward: 30000 }}
        // library doesn't have great types
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onLoadedData={({ target }: { target: any }) => {
          target.currentTime = startTime || 0;
        }}
      />
      <SpeedController onChange={updateSpeed} speed={speed} />
    </>
  );
}

export default AudioPlayer;
