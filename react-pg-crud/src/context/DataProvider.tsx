import React, { createContext, useReducer, useMemo } from "react";
import { IDataContext } from "../interfaces";

const initialState: IDataContext = {
  search: "",
  data: null,
  isLoading: true,
  error: "",
  offset: 0,
};

function reducer(state: IDataContext, action: { type: string; payload: any }) {
  switch (action.type) {
    case "DATA_FETCHED":
      return { ...state, data: action.payload };
    case "TOGGLE_LOADING":
      return { ...state, isLoading: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload, offset:0 };
    case "OFFSET":
      return { ...state, offset:state.offset+1}
    case "ERROR":
      return { ...state, error: action.payload };
    case "PUSH_MORE_DATA":
      if (state.data) {
        const newData = [...state.data, ...action.payload];
        return { ...state, data: newData };
      }
      return { ...state, data: action.payload }
    default:
      throw new Error();
  }
}

const DataContext: any = createContext({});

function DataProvider({ children }: { children: JSX.Element[] }) {
  const [store, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { store, dispatch };
  }, [store, dispatch]);
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

export { DataProvider as Provider, DataContext as default };
