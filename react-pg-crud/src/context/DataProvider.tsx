import React, { createContext, useReducer, useMemo } from "react";
import { IDataContext, IContactForm, IContact } from "../interfaces";

const initialState: IDataContext = {
  contactFormActive: false,
  deleteFormActive: false,
  currentContactData: {
    name: "",
    phone: "",
    id: null,
  },
  search: "",
  data: null,
  isLoading: true,
  error: "",
  offset: 0,
};

function reducer(state: IDataContext, action: { type: string; payload: any }) {
  let currentContact : IContactForm;
  let newData : IContact[];
  switch (action.type) {
    case "DATA_FETCHED":
      return { ...state, data: action.payload };
    case "TOGGLE_LOADING":
      return { ...state, isLoading: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload, offset: 0 };
    case "OFFSET":
      return { ...state, offset: state.offset + 1 };
    case "ERROR":
      return { ...state, error: action.payload };
    case "PUSH_MORE_DATA":
      if (state.data) {
        newData = [...state.data, ...action.payload];
        return { ...state, data: newData };
      }
      return { ...state, data: action.payload };
    case "TOGGLE_EDIT_FORM":
      //find a way to remove this repetition
      currentContact = action.payload
        ? action.payload
        : { name: "", phone: "", id: null };
      return {
        ...state,
        contactFormActive: !state.contactFormActive,
        currentContactData: currentContact,
      };
    case "TOGGLE_DELETE_FORM":
      //here
      currentContact = action.payload
        ? action.payload
        : { name: "", phone: "", id: null };
      return { ...state, currentContactData:currentContact, deleteFormActive:!state.deleteFormActive}
    default:
      throw new Error();
  }
}

const DataContext: any = createContext({});

const DataProvider : React.FC = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { store, dispatch };
  }, [store, dispatch]);
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

export { DataProvider as Provider, DataContext as default };
