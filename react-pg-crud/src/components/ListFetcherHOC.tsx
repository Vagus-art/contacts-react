import React, { useState, useEffect } from "react";
import axios from "axios";

interface IContact {
  name: string;
  phone: string;
  id: number
}


const ListFetcherHOC = (Component: React.ComponentType<any>, apiRoot:string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData]: [IContact[] | null, Function] = useState(null);
  const [error, setError]: [string, Function] = useState("");

  const fetchData = () => {
    axios
      .get(apiRoot)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Component isLoading={isLoading} data={data} error={error}/>;
}

export default ListFetcherHOC;