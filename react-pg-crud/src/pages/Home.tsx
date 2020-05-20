import React, { useContext } from "react";
import { SearchBar, ContactForm } from "../components/forms";
import classes from "./Pages.module.css";
import { ListWrapper as List, ModalMenu } from "../components";
import DataContext from "../context/DataProvider";

const { page } = classes;

export default function Home() {
  const { store, dispatch } = useContext(DataContext);
  const { editFormActive } = store;
  return (
    <div>
      <SearchBar />
      <div className={page}>
        <List />
      </div>
      <ModalMenu
        active={editFormActive}
        closeFunc={() => dispatch({ type: "TOGGLE_EDIT_FORM" })}
      >
        <ContactForm
          onSubmitCallback={() => dispatch({ type: "TOGGLE_EDIT_FORM" })}
        />
      </ModalMenu>
    </div>
  );
}
