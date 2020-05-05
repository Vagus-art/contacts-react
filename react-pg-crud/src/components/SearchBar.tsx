import React,{useContext, useState} from 'react'
import classes from './SearchBar.module.css'
import DataContext from '../context/DataProvider';

export default function SearchBar() {
    const [_search, _setSearch] = useState("");
    const {store,dispatch} = useContext(DataContext);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type:"SEARCH",payload:_search})
        console.log(_search);
    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input value={_search} type="text" placeholder="search..." className={classes.SearchBar} onChange={(e)=>_setSearch(e.target.value)}/>
        </form>
    )
}