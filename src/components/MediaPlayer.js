import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
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

  getMediaContainer = () => {
    // initial load: it doesn't do a/th
    if (!this.props.url) {
      return <h3>No media</h3>;
    }

    if (this.props.url.includes("youtu")) {
      return <ReactPlayer url={this.props.url} controls={true} />
    } else if (this.props.url.includes(".mp3")) {
      return (
        <>
          <ReactAudioPlayer
            ref={(c) => (this.player = c)}
            src={this.props.url}
          />

          <SpeedController
            onChange={this.updateSpeed}
            speed={this.state.speed}
          />
        </>
      );
    } else if (this.props.url.includes(".jpg") || this.props.url.includes(".png")) {
      return <img className="media-image" src="https://i.imgur.com/LKgKVm0.jpg" alt=""></img>
    } else {
      return <h3>No media</h3>;
    }
  };
  render() {
    return (
      <div className="media-player">
        {this.getMediaContainer()}
      </div>
    )
  }
}

MediaPlayer.propTypes = {
  url: PropTypes.string,
};
