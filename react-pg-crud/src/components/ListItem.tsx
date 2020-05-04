import React from "react";
import classes from "./ListItem.module.css";

interface IListItem {
    name: string,
    value: number
}

export default function ListItem(props:IListItem) {
  return (
    <div className={classes.ListItem}>
      <p>{props.name}</p>
      <p>{props.value}</p>
    </div>
  );
}
