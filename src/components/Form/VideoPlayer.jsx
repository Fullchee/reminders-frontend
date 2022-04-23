import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import { SpeedController } from "./SpeedController/SpeedController";
import "./VideoPlayer.scss";

function VideoPlayer({ url }) {
  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  function moveForward({ seconds } = { seconds: 10 }) {
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
      <div class="seek-buttons">
        <button onClick={() => moveForward({ seconds: -5 })}>&lt;</button>
        <button onClick={() => moveForward({ seconds: 10 })}>&gt;</button>
      </div>
    </>
  );
}

VideoPlayer.propTypes = {
  url: PropTypes.string,
};

export default VideoPlayer;
