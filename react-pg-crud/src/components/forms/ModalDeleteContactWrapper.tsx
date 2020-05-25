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
  const onSubmit = async (id: number) => {
    dispatch({ type: "CLEAN_LOADING" });
    const response = await axios.delete(apiRoot + id);
    if (response) {
      dispatch({ type: "UPDATE" });
    }
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
