import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DataContext from "../../context/DataProvider";
import { IContactForm } from "../../interfaces";
import classes from "./Form.module.css";

const { header, bar, input, buttonsPanel, formButton, cancel } = classes;

const contactFormSchema = yup.object().shape({
  name: yup.string().required().min(5),
  phone: yup
    .number()
    .required()
    .positive()
    .integer()
    .test(
      "len",
      "Must be exactly 5 characters",
      (val) => val.toString().length > 4
    ),
});

interface ContactFormProps {
  closeFunc: () => void;
  //closeFunc is a function needed to close the modal menu from the form, it changes the boolean value used to determine if it's closed or not
  submitFunc: (contact: IContactForm) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ closeFunc, submitFunc }) => {
  const { register, handleSubmit, setValue, errors, clearError } = useForm({
    validationSchema: contactFormSchema,
  });

  const {
    store: {
      currentContactData: { name, phone, id },
    },
  } = useContext(DataContext);

  const onSubmit = handleSubmit(({ name, phone }) => {
    //name and phone are the input values, id gets passed by the closure (its the store value)
    submitFunc({ name, phone, id });
    closeFunc();
  });

  useEffect(() => {
    setValue([{ name }, { phone }]);
    clearError();
  }, [name, phone, setValue, clearError]);

  return (
    <div>
      {id ? <h2 className={header}>Edit</h2> : <h2 className={header}>Add</h2>}
      <hr className={bar} />
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            className={input}
            type="text"
            name="name"
            defaultValue={name}
            ref={register({
              required: "Name is required",
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters long",
              },
            })}
          />
        </label>
        {errors.name && <p>Name is invalid</p>}
        <label>
          Phone
          <input
            className={input}
            type="text"
            name="phone"
            defaultValue={phone}
            ref={register({
              required: "Phone is required",
              minLength: {
                value: 5,
                message: "Phone must be at least 5 digits long",
              },
            })}
          />
        </label>
        {errors.phone && <p>Phone is invalid</p>}
        <div className={buttonsPanel}>
          <button onClick={closeFunc} className={`${formButton} ${cancel}`}>Cancel</button>
          <input type="submit" value="Submit" className={formButton} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
