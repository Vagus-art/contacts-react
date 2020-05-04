import React from 'react'
import classes from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <input type="text" placeholder="search..." className={classes.SearchBar}/>
    )
}
