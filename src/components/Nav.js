import PropTypes from "prop-types";
import React from "react";
import addIcon from "../images/add.svg";
import reloadIcon from "../images/renew.svg";
import overflowIcon from "../images/overflow-menu--vertical.svg";
import trashIcon from "../images/trash-can.svg";
import Ripple from "react-touch-ripple";
import SearchBox from "./SearchBox";
function Nav(props) {
  return (
    <nav className="buttons">
      <SearchBox />
      <div className="buttons__icons">
        <Ripple>
          <button id="refresh" onClick={props.refresh}>
            <img src={reloadIcon} alt="reload" />
          </button>
        </Ripple>
        <Ripple>
          <button id="add" onClick={props.clearForm}>
            <img src={addIcon} alt="add" />
          </button>
        </Ripple>
        <Ripple>
          <button id="delete" className="delete" onClick={props.confirmDelete}>
            <img src={trashIcon} alt="delete" />
          </button>
        </Ripple>
        {/* <Ripple>
        <button id="overflow" onClick={props.clearForm}>
          <img src={overflowIcon} alt="click for more" />
        </button>
      </Ripple> */}
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
