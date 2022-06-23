import PropTypes from "prop-types";
import React, { MouseEventHandler } from "react";
// @ts-ignore
import Ripple from "react-touch-ripple";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

import SearchBox from "../Search/SearchBox";
import NavMoreMenu from "./NavMoreMenu";
import addIcon from "../../images/add.svg";
import shuffle from "../../images/shuffle.svg";
import "./Nav.scss";

interface NavProps {
  clearForm: MouseEventHandler;
  confirmDelete: MouseEventHandler;
  isFlagged: boolean;
  refresh: any;
  toggleFlag: MouseEventHandler;
  hasLink: boolean;
  confirmLogout: MouseEventHandler;
}

function Nav({
  clearForm,
  confirmDelete,
  isFlagged,
  refresh,
  toggleFlag,
  hasLink,
  confirmLogout,
}: NavProps) {
  return (
    <nav className="buttons home-nav">
      <SearchBox />
      <div className="buttons__icons">
        {/* @ts-ignore */}
        <Tooltip title="Random" touchHold="true">
          <Ripple>
            <button id="random" onClick={refresh}>
              <img src={shuffle} alt="random" />
            </button>
          </Ripple>
        </Tooltip>
        {/* @ts-ignore */}
        <Tooltip title="Add" touchHold="true">
          <Ripple>
            <button id="add" onClick={clearForm}>
              <img src={addIcon} alt="add" />
            </button>
          </Ripple>
        </Tooltip>
        <NavMoreMenu
          isFlagged={isFlagged}
          onDelete={confirmDelete}
          toggleFlag={toggleFlag}
          hasLink={hasLink}
          confirmLogout={confirmLogout}
        />
      </div>
    </nav>
  );
}

Nav.propTypes = {
  clearForm: PropTypes.func,
  confirmDelete: PropTypes.func,
  isFlagged: PropTypes.bool,
  refresh: PropTypes.func,
  toggleFlag: PropTypes.func,
};

export default Nav;
