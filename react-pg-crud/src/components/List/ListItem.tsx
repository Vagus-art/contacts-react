import React, { useContext } from "react";
import DataContext from "../../context/DataProvider";
import classes from "./ListItem.module.css";
import { IListItem } from "../../interfaces";
// get our fontawesome imports
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem: React.FC<IListItem> = (props) => {
  const {dispatch} = useContext(DataContext);
  return (
    <div className={`${classes.ListItem} ${classes.ListItemWithButtons}`}>
      <div>
        <p>{props.name}</p>
        <p>{props.phone}</p>
      </div>
      <div className={classes.ButtonPanel}>
        <button onClick={()=>dispatch({type:"TOGGLE_MODAL_MENU"})}><FontAwesomeIcon icon={faEdit} /></button>
        <button><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
    </div>
  );
};

export default ListItem;
