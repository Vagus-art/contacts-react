import React, { useEffect, useContext } from "react";
import axios from "axios";
import List from "./List";
import { IContact } from "../../interfaces";
import DataContext from "../../context/DataProvider";


const apiRoot = "https://pg-raw-api.herokuapp.com/api/contacts/";


const ListWrapper = () => {

  const {store, dispatch} = useContext(DataContext);

  const {isLoading, data, error} = store;

  const fetchData = () => {
    axios
      .get(apiRoot)
      .then((response) => {
        dispatch({type:"DATA_FETCHED",payload:response.data.data});
      })
      .catch((err) => {
        dispatch({type:"ERROR",payload:err});
      })
      .finally(() => dispatch({type:"TOGGLE_LOADING",payload:false}));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (<List isLoading={isLoading} data={data} error={error}/>)};


export default ListWrapper;