import React, { Component } from "react";
import ReactPlayer from "react-player";

class MediaPlayer extends Component {
  render() {
    // initial load: it doesn't do a/th
    if (!this.props.url) {
      return null;
    }
    if (this.props.url.includes("youtu")) {
      return <ReactPlayer url={this.props.url} />;
    } else if (this.props.url.slice(-4) === ".mp3") {
      debugger;
      return (
        <audio controls src={this.props.url} type="audio/mpeg">
          Your browser does not support the audio tag.
        </audio>
      );
    } else {
      return <h3>No media</h3>;
    }
  }
}

export default MediaPlayer;
