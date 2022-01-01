import PropTypes from "prop-types";
import React from "react";
import { SpeedController } from "./SpeedController";
import "./PlayerManager.scss";
export function PlayerManager({ onChange, speed }) {
  return <SpeedController onChange={onChange} speed={speed} />;
}

PlayerManager.propTypes = {
  onChange: PropTypes.func,
  speed: PropTypes.number,
};
