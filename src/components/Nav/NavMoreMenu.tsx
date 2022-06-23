import React, { MouseEventHandler } from "react";
// @ts-ignore
import Ripple from "react-touch-ripple";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";

import flagIcon from "../../images/flag.svg";
import refreshIcon from "../../images/renew.svg";
import overflowIcon from "../../images/overflow-menu--vertical.svg";
import trashIcon from "../../images/trash-can.svg";
import logoutIcon from "../../images/logout.svg";

interface NavMoreMenuProps {
  onDelete: MouseEventHandler;
  isFlagged: boolean;
  toggleFlag: MouseEventHandler;
  hasLink: boolean;
  confirmLogout: MouseEventHandler;
}

function NavMoreMenu({
  onDelete,
  isFlagged,
  toggleFlag,
  hasLink,
  confirmLogout,
}: NavMoreMenuProps) {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(3);
  return (
    <div className="more-menu-container">
      {/* @ts-ignore */}
      <Tooltip title="More" touchHold="true">
        <Ripple>
          <button id="overflow" {...buttonProps}>
            <img src={overflowIcon} alt="Click for more" />
          </button>
        </Ripple>
      </Tooltip>
      <div className={`${isOpen ? "visible" : ""} more-menu`} role="menu">
        <a
          className={`more-menu-item ${isFlagged ? "is-flagged" : ""}`}
          {...itemProps[0]}
          onClick={(e) => {
            setIsOpen(false);
            toggleFlag(e);
          }}
        >
          <img src={flagIcon} alt=""></img>
          {isFlagged ? "Unflag" : "Flag"}
        </a>
        <a
          className="more-menu-item"
          {...itemProps[1]}
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src={refreshIcon} alt=""></img>
          Refresh
        </a>
        <a
          className={`more-menu-item delete ${hasLink ? "" : "disable"}`}
          {...itemProps[2]}
          onClick={(e) => {
            setIsOpen(false);
            onDelete(e);
          }}
        >
          <img src={trashIcon} alt=""></img>Delete
        </a>
        <a
          className={`more-menu-item delete ${hasLink ? "" : "disable"}`}
          {...itemProps[3]}
          onClick={(e) => {
            setIsOpen(false);
            confirmLogout(e);
          }}
        >
          <img src={logoutIcon} alt=""></img>Log out
        </a>
      </div>
    </div>
  );
}

export default NavMoreMenu;
