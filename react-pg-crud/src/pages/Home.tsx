import React, { useContext } from "react";
import { SearchBar } from "../components/forms";
import classes from "./Pages.module.css";
import { ListWrapper as List } from "../components";
import { ModalContactForm, ModalDeleteContact } from "../components/forms";
import DataContext from "../context/DataProvider";
import { ActionButton } from "../layout";

const { page } = classes;

export default function Home() {
  const { dispatch } = useContext(DataContext);
  return (
    <div>
      <SearchBar />
      <div className={page}>
        <ActionButton action={() => dispatch({ type: "TOGGLE_EDIT_FORM" })} />
        <List />
      </div>
      <ModalContactForm />
      <ModalDeleteContact />
    </div>
  );
}
