import React from "react";
import "react-h5-audio-player/lib/styles.css";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";

interface MediaPlayerProps {
  url: string;
  startTime: number;
}

function MediaPlayer({ url, startTime }: MediaPlayerProps) {
  const getMediaContainer = () => {
    // initial load: it doesn't do a/th
    if (!url) {
      return <h3>No media</h3>;
    }

    if (url.includes("youtu")) {
      return <VideoPlayer url={url} />;
    }
    if (url.includes(".mp3")) {
      return <AudioPlayer url={url} startTime={startTime} />;
    }
    if (
      url.endsWith(".jpg") ||
      url.endsWith(".png") ||
      url.includes("imgur.com")
    ) {
      if (url.includes("imgur.com") && !url.endsWith(".jpg")) {
        url += ".jpg";
      }
      return <img className="media-image" src={url} alt=""></img>;
    }
    return <h3>No media</h3>;
  };
  return <div className="media-player">{getMediaContainer()}</div>;
}

export default MediaPlayer;
