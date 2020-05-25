import React, { useContext } from "react";
import DeleteContact from "./DeleteContact";
import ModalMenu from "../ModalMenu";
import DataContext, { apiRoot } from "../../context/DataProvider";
import axios from "axios";

const ModalContactFormWrapper: React.FC = () => {
  const {
    store: { deleteFormActive },
    dispatch,
  } = useContext(DataContext);
  const onSubmit = (id: number) => {
    console.log("deleted", id);
    axios.delete(apiRoot + id).then(dispatch({ type: "SEARCH", payload: "" }));
  };
  return (
    <ModalMenu
      active={deleteFormActive}
      closeFunc={() => dispatch({ type: "TOGGLE_DELETE_FORM" })}
    >
      <DeleteContact
        closeFunc={() => dispatch({ type: "TOGGLE_DELETE_FORM" })}
        submitFunc={onSubmit}
      />
    </ModalMenu>
  );
};

export default ModalContactFormWrapper;
