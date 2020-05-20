import React, { useContext } from "react";
import { SearchBar, ContactForm } from "../components/forms";
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
        <ContactForm onSubmitCallback={()=>dispatch({type:"TOGGLE_MODAL_MENU"})}/>
      </ModalMenu>
    </div>
  );
}
