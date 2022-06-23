import React, { useRef, useState } from "react";
import ReactAudioPlayer from "react-h5-audio-player";
import { SpeedController } from "./SpeedController/SpeedController";

interface AudioPlayerProps {
  url: string;
  startTime: number;
}

function AudioPlayer({ url, startTime }: AudioPlayerProps) {
  const [speed, setSpeed] = useState(1);
  let playerRef: any = useRef(null);
  const updateSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    playerRef.audio.current.playbackRate = newSpeed;
  };
  return (
    <>
      <ReactAudioPlayer
        ref={(c) => (playerRef = c)}
        src={url}
        progressJumpSteps={{ backward: 15000, forward: 30000 }}
        onLoadedData={({ target }: { target: any }) => {
          target.currentTime = startTime || 0;
        }}
      />
      <SpeedController onChange={updateSpeed} speed={speed} />
    </>
  );
}

export default AudioPlayer;
