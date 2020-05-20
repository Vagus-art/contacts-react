import React, { useContext } from "react";
import classes from "./ListItem.module.css";
import DataContext from "../../context/DataProvider";

const { listItemLoader, listItem } = classes;

const ListItemLoader: React.FC = () => {
  const { dispatch } = useContext(DataContext);
  const handleClick = () => {
    dispatch({ type: "OFFSET" });
    dispatch({ type: "TOGGLE_LOADING", payload: true });
  };
  return (
    <div
      className={`${listItemLoader} ${listItem}`}
      onClick={() => handleClick()}
    >
      <h3>Load more...</h3>
    </div>
  );
};

export default ListItemLoader;
