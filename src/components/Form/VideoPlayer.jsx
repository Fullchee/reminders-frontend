import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { PlayerManager } from "./PlayerManager/PlayerManager";

function VideoPlayer({ url }) {
  const [speed, setSpeed] = useState(1);

  return (
    <>
      <ReactPlayer playbackRate={speed} url={url} controls={true} />
      <PlayerManager onChange={setSpeed} speed={speed} />
    </>
  );
}

VideoPlayer.propTypes = {
  url: PropTypes.string,
};

export default VideoPlayer;
