import React from "react";
import addIcon from "../images/add.svg";
import reloadIcon from "../images/renew.svg";
import overflowIcon from "../images/overflow-menu--vertical.svg";
import trashIcon from "../images/trash-can.svg";
import searchIcon from "../images/search.svg";
import Ripple from "react-touch-ripple";
function Nav(props) {
  return (
    <nav className="buttons">
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
    </nav>
  );
}

export default Nav;
