import React, { Component } from "react";

export default class AudioPlayer extends Component {
  skip30Seconds = () => {};
  render() {
    return (
      <>
        <button onClick={this.skip30Seconds}>Skip 30 seconds</button>
        <audio id="audio" controls src={this.props.url} type="audio/mpeg">
          Your browser does not support the audio tag.
        </audio>
      </>
    );
  }
}
