import React from "react";
import classes from "./ListItem.module.css";

interface IListItem {
    name: string,
    phone: number
}

const ListItem : React.FC<IListItem> = (props) => {
  return (
    <div className={classes.ListItem}>
      <p>{props.name}</p>
      <p>{props.phone}</p>
    </div>
  );
}

export default ListItem;