import PropTypes from 'prop-types';
import React from 'react';
import Ripple from 'react-touch-ripple';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import SearchBox from './SearchBox';
import NavMoreMenu from './NavMoreMenu';
import addIcon from '../../images/add.svg';
import shuffle from '../../images/shuffle.svg';
import './Nav.scss'

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
