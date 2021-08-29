import PropTypes from 'prop-types';
import React from 'react';
import Ripple from 'react-touch-ripple';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

import flagIcon from '../../images/flag.svg';
import refreshIcon from '../../images/renew.svg';
import overflowIcon from '../../images/overflow-menu--vertical.svg';
import trashIcon from '../../images/trash-can.svg';

function NavMoreMenu({ onDelete, isFlagged, toggleFlag, hasLink }) {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(3);
  return (
    <div className="more-menu-container">
      <Tooltip title="More" touchHold="true">
        <Ripple>
          <button id="overflow" {...buttonProps}>
            <img src={overflowIcon} alt="Click for more" />
          </button>
        </Ripple>
      </Tooltip>
      <div className={`${isOpen ? 'visible' : ''} more-menu`} role="menu">
        <a
          className={`more-menu-item ${isFlagged ? 'is-flagged' : ''}`}
          {...itemProps[0]}
          onClick={(e) => {
            setIsOpen(false);
            toggleFlag(e);
          }}
        >
          <img src={flagIcon} alt="Flag"></img>
          {isFlagged ? 'Unflag' : 'Flag'}
        </a>
        <a
          className="more-menu-item"
          {...itemProps[1]}
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src={refreshIcon} alt="Refresh"></img>
          Refresh
        </a>
        <a
          className={`more-menu-item delete ${hasLink ? '' : 'disable'}`}
          {...itemProps[2]}
          onClick={(e) => {
            setIsOpen(false);
            onDelete(e);
          }}
        >
          <img src={trashIcon} alt="Delete"></img>Delete
        </a>
      </div>
    </div>
  );
}

NavMoreMenu.propTypes = {
  onDelete: PropTypes.func,
  toggleFlag: PropTypes.func,
  isFlagged: PropTypes.bool,
};

export default NavMoreMenu;
