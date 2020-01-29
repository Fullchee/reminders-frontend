import React, { Component } from "react";
import ReactPlayer from "react-player";
import AudioPlayer from "./AudioPlayer";

class MediaPlayer extends Component {
  render() {
    // initial load: it doesn't do a/th
    if (!this.props.url) {
      return <h3>No media</h3>;
    }
    if (this.props.url.includes("youtu")) {
      return <ReactPlayer url={this.props.url} />;
    } else if (this.props.url.slice(-4) === ".mp3") {
      return <AudioPlayer url={this.props.url} />;
    } else {
      return <h3>No media</h3>;
    }
  }
}

export default MediaPlayer;
