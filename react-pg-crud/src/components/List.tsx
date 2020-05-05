import React, { ReactNode, PropsWithChildren } from "react";
import ListItem from "./ListItem";
import classes from "./List.module.css";
import ListFetcherHOC from './ListFetcherHOC';

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

class List extends React.Component<IListProps> {
    render(){
  return (
    <div className={classes.List}>
      {(!this.props.isLoading &&
        !this.props.error) ?
        this.props.data.map((item: any, index: number) => (
          <ListItem name={item.name} value={item.value} key={index} />
        )) : <div>Loading...</div>}
    </div>
  );}
}

export default ListFetcherHOC(List,"https://pg-raw-api.herokuapp.com/api/contacts/");
