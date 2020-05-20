import React from "react";
import ListItem from "./ListItem";
import ListItemLoader from "./ListItemLoader";
import classes from "./List.module.css";
import itemclasses from "./ListItem.module.css";
import { IListProps } from "../../interfaces";

const { list } = classes;
const { listItem } = itemclasses;

const List: React.FC<IListProps> = ({ isLoading, data, error }) => {
  return (
    <div className={list}>
      {/*List items with loader button */}
      {!error && data && (
        <div>
          {data.map((item: any, index: number) => (
            <ListItem name={item.name} phone={item.phone} key={index} />
          ))}
        </div>
      )}

      {/*Loading indicator */}
      {isLoading && !error && <div className={listItem}>Loading...</div>}

      {/*Load more button */}
      {!isLoading && !error && data && <ListItemLoader />}

      {/* When search returns no result */}
      {!isLoading && data && data.length === 0 && (
        <div className={listItem}>No contacts found :/</div>
      )}

      {/* When fetching returns error */}
      {!isLoading && error && <div className={listItem}>{error}</div>}
    </div>
  );
};

export default List;
