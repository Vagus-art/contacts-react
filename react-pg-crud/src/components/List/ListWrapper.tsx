import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

interface IContact {
  name: string;
  phone: string;
  id: number
}

const apiRoot = "https://pg-raw-api.herokuapp.com/api/contacts/";


const ListWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData]: [IContact[] | null, Function] = useState(null);
  const [error, setError]: [string, Function] = useState("");

  const fetchData = () => {
    axios
      .get(apiRoot)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (<List isLoading={isLoading} data={data} error={error}/>)};


export default ListWrapper;