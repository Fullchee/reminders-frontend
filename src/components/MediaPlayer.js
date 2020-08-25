import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
// import AudioPlayer from "./AudioPlayer";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import SpeedController from "./SpeedController";

export default class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1,
      player: React.createRef(),
    };
  }

  updateSpeed = (e) => {
    const newSpeed = parseFloat(e.target.value);
    this.setState({
      speed: newSpeed,
    });
    this.player.audio.playbackRate = newSpeed;
  };
  render() {
    // initial load: it doesn't do a/th
    if (!this.props.url) {
      return <h3>No media</h3>;
    }
    if (this.props.url.includes("youtu")) {
      return (
        <div className="media-player">
          <ReactPlayer url={this.props.url} controls={true} />
        </div>
      );
    } else if (this.props.url.includes(".mp3")) {
      return (
        <div className="media-player">
          <ReactAudioPlayer
            ref={(c) => (this.player = c)}
            src={this.props.url}
          />

          <SpeedController
            onChange={this.updateSpeed}
            speed={this.state.speed} />
        </div>
      );
    } else {
      return <h3>No media</h3>;
    }
  }
}

MediaPlayer.propTypes = {
  url: PropTypes.string,
};
