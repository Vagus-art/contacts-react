import React, { useContext } from "react";
import ContactForm from "./ContactForm";
import ModalMenu from "../ModalMenu";
import DataContext from "../../context/DataProvider";
import { IContactForm } from "../../interfaces";

const ModalContactFormWrapper: React.FC = () => {
  const {
    store: { contactFormActive },
    dispatch,
  } = useContext(DataContext);
  const onSubmit = ({name,phone,id}:IContactForm) => {
    if(id){
        console.log("edited",name,phone,id);
    }
    else{
        console.log("added",name,phone,"id");
    }
  }
  return (
    <ModalMenu
      active={contactFormActive}
      closeFunc={() => dispatch({ type: "TOGGLE_EDIT_FORM" })}
    >
      <ContactForm closeFunc={() => dispatch({ type: "TOGGLE_EDIT_FORM" })} submitFunc={onSubmit} />
    </ModalMenu>
  );
};

export default ModalContactFormWrapper;
