import React, {useContext} from "react";
import classes from "./ListItem.module.css";
import DataContext from "../../context/DataProvider";


const ListItemLoader : React.FC = () => {
  const {dispatch} = useContext(DataContext);
  const handleClick = () => {
    dispatch({type:"OFFSET"});
  }
  return (
    <div className={`${classes.ListItemLoader} ${classes.ListItem}`} onClick={()=>handleClick()}>
      <h3>Load more...</h3>
    </div>
  );
}

export default ListItemLoader;