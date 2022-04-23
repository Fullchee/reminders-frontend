import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import { SpeedController } from "./SpeedController/SpeedController";

function VideoPlayer({ url }) {
  const [speed, setSpeed] = useState(1);
  const playerRef = useRef(null);

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        playbackRate={speed}
        url={url}
        controls={true}
      />
      <SpeedController onChange={setSpeed} speed={speed} />
    </>
  );
}

VideoPlayer.propTypes = {
  url: PropTypes.string,
};

export default VideoPlayer;
