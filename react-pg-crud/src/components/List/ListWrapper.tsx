import React, { useEffect, useContext } from "react";
import axios from "axios";
import List from "./List";
import DataContext from "../../context/DataProvider";
import { apiRoot } from "../../context/DataProvider";

const ListWrapper = () => {
  const {
    store: { isLoading, data, error, search, offset, updateSwitch },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    const fetchData = ({
      search,
      offset,
    }: {
      search: string;
      offset: number;
    }) => {
      //if search string is not empty, add it to uri parameters
      axios
        .get(
          search
            ? `${apiRoot}/search/${search}`
            : offset
            ? `${apiRoot}/offset/${offset}`
            : apiRoot
        )
        .then((response) => {
          const action = offset && !search ? "PUSH_MORE_DATA" : "DATA_FETCHED";
          dispatch({ type: action, payload: response.data.data });
        })
        .catch((err) => {
          dispatch({ type: "ERROR", payload: "There has been an error" });
        })
        .finally(() => dispatch({ type: "TOGGLE_LOADING", payload: false }));
    };
    fetchData({ search, offset });
  }, [search, offset, dispatch, updateSwitch]);

  return <List isLoading={isLoading} data={data} error={error} />;
};

export default ListWrapper;
