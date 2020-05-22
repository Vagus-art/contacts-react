import React from "react";
import { SearchBar } from "../components/forms";
import classes from "./Pages.module.css";
import { ListWrapper as List } from "../components";
import { ModalContactForm, ModalDeleteContact } from "../components/forms";

const { page } = classes;

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className={page}>
        <List />
      </div>
      <ModalContactForm />
      <ModalDeleteContact />
    </div>
  );
}
