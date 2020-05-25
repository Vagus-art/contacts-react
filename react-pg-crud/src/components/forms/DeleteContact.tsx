import React, { useContext } from "react";
import DataContext from "../../context/DataProvider";

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

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    submitFunc(id);
    closeFunc();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Are you sure you want to delete {name}?</h1>
        <input type="button" onClick={closeFunc} value="Cancel"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DeleteContact;
