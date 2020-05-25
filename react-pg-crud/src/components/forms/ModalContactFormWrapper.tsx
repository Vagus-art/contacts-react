import React, { useContext } from "react";
import ContactForm from "./ContactForm";
import ModalMenu from "../ModalMenu";
import DataContext, { apiRoot } from "../../context/DataProvider";
import { IContactForm } from "../../interfaces";
import axios, { AxiosRequestConfig } from "axios";


const ModalContactFormWrapper: React.FC = () => {
  const {
    store: { contactFormActive },
    dispatch,
  } = useContext(DataContext);
  const onSubmit = async (data: IContactForm) => {
    dispatch({ type: "CLEAN_LOADING" });
    let method: AxiosRequestConfig["method"] = data.id ? "put" : "post";
    const response = await axios.request({
      baseURL: apiRoot,
      method,
      data,
    });
    if (response) {
      dispatch({ type: "UPDATE" });
    }
  };
  return (
    <ModalMenu
      active={contactFormActive}
      closeFunc={() => dispatch({ type: "TOGGLE_EDIT_FORM" })}
    >
      <ContactForm
        closeFunc={() => dispatch({ type: "TOGGLE_EDIT_FORM" })}
        submitFunc={onSubmit}
      />
    </ModalMenu>
  );
};

export default ModalContactFormWrapper;
