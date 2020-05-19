import React, { useContext } from "react";
import { SearchBar } from "../components";
import classes from "./Pages.module.css";
import { ListWrapper as List, ModalMenu } from "../components";
import DataContext from "../context/DataProvider";

export default function Home() {
  const { store, dispatch } = useContext(DataContext);
  const { modalMenuActive } = store;
  return (
    <div>
      <SearchBar />
      <div className={classes.Page}>
        <List />
      </div>
      <ModalMenu active={modalMenuActive} closeFunc={() => dispatch({type:"TOGGLE_MODAL_MENU"})}>
        {/* placeholder children */}
        <div>
          <form action="">
            <input type="text" />
            <input type="submit" value="" />
          </form>
        </div>
      </ModalMenu>
    </div>
  );
}
