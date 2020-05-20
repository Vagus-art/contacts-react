import React, { useContext } from "react";
import DataContext from "../../context/DataProvider";
import classes from "./ListItem.module.css";
import { IListItem } from "../../interfaces";
// get our fontawesome imports
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//agregar dispatchs de nombre y telefono a boton de editar

const { listItem, buttonPanel, listItemWithButtons } = classes;

const ListItem: React.FC<IListItem> = ({ name, phone }) => {
  const { dispatch } = useContext(DataContext);
  return (
    <div className={`${listItem} ${listItemWithButtons}`}>
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <div className={buttonPanel}>
        <button onClick={() => dispatch({ type: "TOGGLE_EDIT_FORM" })}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
