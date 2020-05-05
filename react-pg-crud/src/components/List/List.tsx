import React from "react";
import ListItem from "./ListItem";
import classes from "./List.module.css";
import { IListProps } from "../../interfaces";

const List : React.FC<IListProps> = (props) => {
  return (
    <div className={classes.List}>
      {(!props.isLoading &&
        !props.error && props.data) ?
        props.data.map((item: any, index: number) => (
          <ListItem name={item.name} phone={item.phone} key={index} />
        )) : <div>Loading...</div>}
    </div>
  );
}

export default List;