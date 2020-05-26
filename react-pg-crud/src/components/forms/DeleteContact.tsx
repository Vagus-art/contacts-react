import React, { useContext } from "react";
import DataContext from "../../context/DataProvider";
import classes from "./Form.module.css";

const { header, buttonsPanel, formButton, cancel, bar } = classes;

interface DeleteFormProps {
  closeFunc: () => void;
  //closeFunc is a function needed to close the modal menu from the form, it changes the boolean value used to determine if it's closed or not
  submitFunc: (id: number) => void;
}

const DeleteContact: React.FC<DeleteFormProps> = ({
  closeFunc,
  submitFunc,
}) => {
  const {
    store: {
      currentContactData: { name, id },
    },
  } = useContext(DataContext);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitFunc(id);
    closeFunc();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className={header}>Are you sure you want to delete {name}?</h2>
        <hr className={bar}/>
        <div className={buttonsPanel}>
          <button onClick={closeFunc} className={`${formButton} ${cancel}`}>
            Cancel
          </button>
          <input type="submit" value="Confirm" className={formButton} />
        </div>
      </form>
    </div>
  );
};

export default DeleteContact;
