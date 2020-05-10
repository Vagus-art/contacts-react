import React, { useEffect, useContext } from "react";
import axios from "axios";
import List from "./List";
import DataContext from "../../context/DataProvider";


const apiRoot = "https://pg-raw-api.herokuapp.com/api/contacts/";


const ListWrapper = () => {

  const {store, dispatch} = useContext(DataContext);

  const {isLoading, data, error, search} = store; 

  useEffect(() => {
    const fetchData = (search:string) => {
      //if search string is not empty, add it to uri parameters
      axios
        .get(search?`${apiRoot}/search/${search}`:apiRoot)
        .then((response) => {
          dispatch({type:"DATA_FETCHED",payload:response.data.data});
        })
        .catch((err) => {
          dispatch({type:"ERROR",payload:err});
        })
        .finally(() => dispatch({type:"TOGGLE_LOADING",payload:false}));
    };
    fetchData(search);
  }, [search, dispatch]);

  return (<List isLoading={isLoading} data={data} error={error}/>)};


export default ListWrapper;