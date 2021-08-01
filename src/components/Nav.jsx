import PropTypes from 'prop-types';
import React from 'react';
import addIcon from '../images/add.svg';
// import reloadIcon from "../images/renew.svg";
// import randomDice from '../images/random-dice.svg'
import shuffle from '../images/shuffle.svg';
// import overflowIcon from "../images/overflow-menu--vertical.svg";
import trashIcon from '../images/trash-can.svg';
import Ripple from 'react-touch-ripple';
import SearchBox from './SearchBox';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import NavMoreMenu from './NavMoreMenu';

function Nav(props) {
  return (
    <nav className="buttons">
      <SearchBox />
      <div className="buttons__icons">
        <Tooltip title="Random" touchHold="true">
          <Ripple>
            <button id="random" onClick={props.refresh}>
              <img src={shuffle} alt="random" />
            </button>
          </Ripple>
        </Tooltip>
        <Tooltip title="Add" touchHold="true">
          <Ripple>
            <button id="add" onClick={props.clearForm}>
              <img src={addIcon} alt="add" />
            </button>
          </Ripple>
        </Tooltip>
        <NavMoreMenu onDelete={props.confirmDelete} />
      </div>
    </nav>
  );
}

Nav.propTypes = {
  clearForm: PropTypes.func,
  confirmDelete: PropTypes.func,
  refresh: PropTypes.func,
};

export default Nav;
