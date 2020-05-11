import React, { useEffect, useContext } from "react";
import axios from "axios";
import List from "./List";
import DataContext from "../../context/DataProvider";


const apiRoot = "https://pg-raw-api.herokuapp.com/api/contacts/";


const ListWrapper = () => {

  const {store, dispatch} = useContext(DataContext);

  const {isLoading, data, error, search, offset} = store; 

  useEffect(() => {
    const fetchData = ({ search, offset }: { search: string; offset: number; }) => {
      //if search string is not empty, add it to uri parameters
      axios
        .get(search?`${apiRoot}/search/${search}`: offset? `${apiRoot}/offset/${offset}` : apiRoot)
        .then((response) => {
          const action = offset&&!search? "PUSH_MORE_DATA" : "DATA_FETCHED";
          dispatch({type:action,payload:response.data.data});
        })
        .catch((err) => {
          dispatch({type:"ERROR",payload:err});
        })
        .finally(() => dispatch({type:"TOGGLE_LOADING",payload:false}));
    };
    fetchData({ search, offset });
  }, [search, offset, dispatch]);

  return (<List isLoading={isLoading} data={data} error={error}/>)};


export default ListWrapper;