import React, { Component } from "react";

export default class AudioPlayer extends Component {
  render() {
    return (
      <audio controls src={this.props.url} type="audio/mpeg">
        Your browser does not support the audio tag.
      </audio>
    );
  }
}
