import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import SpeedController from './SpeedController';

function AudioPlayer({ url }) {
  const [speed, setSpeed] = useState(1);
  let playerRef = useRef(null);
  const updateSpeed = (newSpeed) => {
    setSpeed(newSpeed);
    playerRef.audio.playbackRate = newSpeed;
  };
  return (
    <>
      <ReactAudioPlayer
        ref={(c) => (playerRef = c)}
        src={url}
        progressJumpSteps={{ backward: 15000, forward: 30000 }}
      />
      <SpeedController onChange={updateSpeed} speed={speed} />
    </>
  );
}

AudioPlayer.propTypes = {
  url: PropTypes.string,
};

export default AudioPlayer;
