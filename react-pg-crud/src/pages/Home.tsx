import React from 'react'
import {SearchBar} from '../components';
import classes from './Pages.module.css';
import List from '../components/List';

export default function Home() {
    return (
        <div>
            <SearchBar />
            <div className={classes.Page}>
                <List />
            </div>
        </div>
    )
}
