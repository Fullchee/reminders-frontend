import React, { Component } from "react";
import ReactPlayer from "react-player";
// import AudioPlayer from "./AudioPlayer";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1
    };
  }
  render() {
    // initial load: it doesn't do a/th
    if (!this.props.url) {
      return <h3>No media</h3>;
    }
    if (this.props.url.includes("youtu")) {
      return <ReactPlayer url={this.props.url} controls="true" />;
    } else if (this.props.url.slice(-4) === ".mp3") {
      return (
        <>
          <ReactAudioPlayer ref={c => (this.player = c)} src={this.props.url} />

          {/* TODO: add a drop down to control the playback speed */}
          <select
            onChange={e => {
              const newSpeed = parseFloat(e.target.value);
              this.setState({
                speed: newSpeed
              });
              debugger;
              this.player.audio.playbackRate = newSpeed;
            }}
            value={this.state.speed}
          >
            <option value="0.5">0.5x</option>
            <option value="0.9">0.9x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="1.75">1.75x</option>
            <option value="2">2x</option>
          </select>
        </>
      );
    } else {
      return <h3>No media</h3>;
    }
  }
}

export default MediaPlayer;
