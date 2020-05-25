import React, { useContext } from "react";
import ContactForm from "./ContactForm";
import ModalMenu from "../ModalMenu";
import DataContext, { apiRoot } from "../../context/DataProvider";
import { IContactForm } from "../../interfaces";
import axios, { AxiosRequestConfig } from "axios";

//bug, i need something to trigger the listwrapper's useEffect, so data refreshes each time I modify something

const ModalContactFormWrapper: React.FC = () => {
  const {
    store: { contactFormActive },
    dispatch,
  } = useContext(DataContext);
  const onSubmit = (data: IContactForm) => {
    let method: AxiosRequestConfig["method"] = data.id ? "put" : "post";
    axios
      .request({
        baseURL: apiRoot,
        method,
        data,
      })
      .finally(dispatch({ type: "SEARCH", payload: "" }));
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
