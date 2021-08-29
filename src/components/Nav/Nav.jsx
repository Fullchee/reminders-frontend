import PropTypes from 'prop-types';
import React from 'react';
import Ripple from 'react-touch-ripple';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import SearchBox from '../Search/SearchBox';
import NavMoreMenu from './NavMoreMenu';
import addIcon from '../../images/add.svg';
import shuffle from '../../images/shuffle.svg';
import './Nav.scss';

function Nav({ refresh, clearForm, isFlagged, confirmDelete, toggleFlag }) {
  return (
    <nav className="buttons home-nav">
      <SearchBox />
      <div className="buttons__icons">
        <Tooltip title="Random" touchHold="true">
          <Ripple>
            <button id="random" onClick={refresh}>
              <img src={shuffle} alt="random" />
            </button>
          </Ripple>
        </Tooltip>
        <Tooltip title="Add" touchHold="true">
          <Ripple>
            <button id="add" onClick={clearForm}>
              <img src={addIcon} alt="add" />
            </button>
          </Ripple>
        </Tooltip>
        <NavMoreMenu isFlagged={isFlagged} onDelete={confirmDelete} toggleFlag={toggleFlag} />
      </div>
    </nav>
  );
}

Nav.propTypes = {
  clearForm: PropTypes.func,
  confirmDelete: PropTypes.func,
  refresh: PropTypes.func,
  isFlagged: PropTypes.bool,
  toggleFlag: PropTypes.func,
};

export default Nav;
