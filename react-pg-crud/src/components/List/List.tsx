import React from "react";
import ListItem from "./ListItem";
import classes from "./List.module.css";

/*
const mock = [
    {
        name:'hello',
        value:100
    },
    {
        name:'world',
        value:200
    },
    {
        name:'world',
        value:200
    },
    {
        name:'world',
        value:200
    }
]
*/

interface IListProps {
  isLoading: boolean | null;
  data: any;
  error: string | null;
}

const List : React.FC<IListProps> = (props) => {
  return (
    <div className={classes.List}>
      {(!props.isLoading &&
        !props.error) ?
        props.data.map((item: any, index: number) => (
          <ListItem name={item.name} phone={item.phone} key={index} />
        )) : <div>Loading...</div>}
    </div>
  );
}

export default List;