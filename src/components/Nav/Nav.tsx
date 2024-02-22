import React, { MouseEventHandler } from "react";
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

export function Nav({
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
        <button id="random" title="Random" onClick={() => link.refetch()}>
          <img src={shuffle} alt="random" />
        </button>
        <button id="add" title="Add" onClick={clearForm}>
          <img src={addIcon} alt="add" />
        </button>
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
