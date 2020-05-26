import React, { useContext } from "react";
import classes from "./SearchBar.module.css";
import { useForm } from "react-hook-form";
import DataContext from "../../context/DataProvider";

type SearchFormData = {
  search: string;
};

const { searchBarContainer } = classes;

export default function SearchBar() {
  const { register, handleSubmit } = useForm<SearchFormData>();
  const { dispatch } = useContext(DataContext);
  const onSubmit = handleSubmit(({ search }) => {
    dispatch({ type: "SEARCH", payload: search });
    dispatch({ type: "TOGGLE_LOADING", payload: true });
    console.log(search);
  });
  return (
    <form onSubmit={onSubmit} className={searchBarContainer}>
      <input
        name="search"
        type="text"
        placeholder="search..."
        ref={register}
      />
    </form>
  );
}
