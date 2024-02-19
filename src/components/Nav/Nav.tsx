import React, { MouseEventHandler } from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import addIcon from "../../images/add.svg";
import shuffle from "../../images/shuffle.svg";
import SearchBox from "../Search/SearchBox";
import "./Nav.scss";
import NavMoreMenu from "./NavMoreMenu";
import { useRandomLink } from "@src/components/Form/useLinkQuery";

interface NavProps {
  clearForm: MouseEventHandler;
  confirmDelete: MouseEventHandler;
  isFlagged: boolean;
  toggleFlag: MouseEventHandler;
  hasLink: boolean;
  confirmLogout: MouseEventHandler;
}

function Nav({
  clearForm,
  confirmDelete,
  isFlagged,
  toggleFlag,
  hasLink,
  confirmLogout,
}: NavProps) {
  const link = useRandomLink();
  return (
    <nav className="buttons home-nav">
      <SearchBox />
      <div className="buttons__icons">
        {/* @ts-ignore */}
        <Tooltip title="Random" touchHold="true">
          <button id="random" onClick={() => link.refetch()}>
            <img src={shuffle} alt="random" />
          </button>
        </Tooltip>
        {/* @ts-ignore */}
        <Tooltip title="Add" touchHold="true">
          <button id="add" onClick={clearForm}>
            <img src={addIcon} alt="add" />
          </button>
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

export default Nav;
