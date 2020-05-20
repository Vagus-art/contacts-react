import React/*, { useContext }*/ from "react";
import { useForm } from "react-hook-form";
//import DataContext from "../../context/DataProvider";
import * as yup from "yup";

const contactFormSchema = yup.object().shape({
  name: yup.string().required().min(5),
  phone: yup.number().required().positive().integer().min(5),
});

interface ContactFormProps {
  onSubmitCallback?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmitCallback }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: contactFormSchema,
  });
  //const { store } = useContext(DataContext);
  const onSubmit = handleSubmit(({ name, phone }) => {
    console.log(name, phone);
    if (onSubmitCallback) {
      onSubmitCallback();
    }
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Name</h1>
        <input
          type="text"
          name="name"
          ref={register({
            required: "Name is required",
            minLength: {
              value: 5,
              message: "Name must be at least 5 characters long",
            },
          })}
        />
        {errors.name && <p>Name is invalid</p>}
        <h1>Phone</h1>
        <input
          type="text"
          name="phone"
          ref={register({
            required: "Phone is required",
            minLength: {
              value: 5,
              message: "Phone must be at least 5 digits long",
            },
          })}
        />
        {errors.name && <p>Phone is invalid</p>}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
