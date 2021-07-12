import React from 'react';
import PropTypes from 'prop-types';
import 'react-h5-audio-player/lib/styles.css';
import VideoPlayer from './VideoPlayer';
import AudioPlayer from './AudioPlayer';
function MediaPlayer({ url }) {
  const getMediaContainer = () => {
    // initial load: it doesn't do a/th
    if (!url) {
      return <h3>No media</h3>;
    }

    if (url.includes('youtu')) {
      return <VideoPlayer url={url} />;
    } else if (url.includes('.mp3')) {
      return <AudioPlayer url={url} />;
    } else if (url.includes('.jpg') || url.includes('.png')) {
      return <img className="media-image" src="https://i.imgur.com/LKgKVm0.jpg" alt=""></img>;
    } else {
      return <h3>No media</h3>;
    }
  };
  return <div className="media-player">{getMediaContainer()}</div>;
}

MediaPlayer.propTypes = {
  url: PropTypes.string,
};

export default MediaPlayer;
