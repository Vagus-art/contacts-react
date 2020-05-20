import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DataContext from "../../context/DataProvider";

const contactFormSchema = yup.object().shape({
  name: yup.string().required().min(5),
  phone: yup.number().required().positive().integer().min(5),
});

interface ContactFormProps {
  Callback?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ Callback }) => {
  const { register, handleSubmit, setValue, errors } = useForm({
    validationSchema: contactFormSchema,
  });

  const {
    store: {
      contactFormContent: { name, phone },
    },
  } = useContext(DataContext);

  const onSubmit = handleSubmit(({ name, phone }) => {
    console.log(name, phone);
    if (Callback) {
      Callback();
    }
  });

  useEffect(()=>{
    setValue([{name,phone}])
  },[name,phone,setValue]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Name</h1>
        <input
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
        {errors.name && <p>Name is invalid</p>}
        <h1>Phone</h1>
        <input
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
        {errors.phone && <p>Phone is invalid</p>}
        <button onClick={Callback}>Cancel</button>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
