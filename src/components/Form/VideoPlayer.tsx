import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import { SpeedController } from "./SpeedController/SpeedController";
import "./VideoPlayer.scss";

function VideoPlayer({ url }: { url: string }) {
  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  function moveForward({ seconds } = { seconds: 10 }) {
    // @ts-ignore
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + seconds);
    setPlaying(true);
  }
  return (
    <>
      <ReactPlayer
        playing={playing}
        ref={playerRef}
        playbackRate={speed}
        url={url}
        controls={true}
      />
      <SpeedController onChange={setSpeed} speed={speed} />
      <div className="seek-buttons">
        <button onClick={() => moveForward({ seconds: -5 })}>&lt;</button>
        <button onClick={() => moveForward({ seconds: 10 })}>&gt;</button>
      </div>
    </>
  );
}

export default VideoPlayer;
