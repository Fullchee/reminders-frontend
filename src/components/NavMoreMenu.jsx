import PropTypes from 'prop-types';
import React from 'react';
import refreshIcon from '../images/renew.svg';
import overflowIcon from '../images/overflow-menu--vertical.svg';
import trashIcon from '../images/trash-can.svg';
import Ripple from 'react-touch-ripple';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import flagIcon from '../images/flag.svg';

function NavMoreMenu({ onDelete }) {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);
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
        <a className="more-menu-item" {...itemProps[0]} onClick={() => {}}>
          <img src={flagIcon} alt="Flag"></img>
          Flag
        </a>
        <a className="more-menu-item" {...itemProps[1]} onClick={() => {}}>
          <img src={refreshIcon} alt="Refresh"></img>
          Refresh
        </a>
        <a className="more-menu-item delete" {...itemProps[2]} onClick={onDelete}>
          <img src={trashIcon} alt="Delete"></img>Delete
        </a>
      </div>
    </div>
  );
}

NavMoreMenu.propTypes = {
  clearForm: PropTypes.func,
  confirmDelete: PropTypes.func,
  refresh: PropTypes.func,
};

export default NavMoreMenu;
