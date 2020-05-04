import React from 'react'
import ListItem from './ListItem';
import classes from './List.module.css';

const mock = [
    {
        name:'hello',
        value:100
    },
    {
        name:'world',
        value:200
    },
    {
        name:'world',
        value:200
    },
    {
        name:'world',
        value:200
    }
]

export default function List() {
    return (
        <div className={classes.List}>
            {mock.map((item, index)=><ListItem name={item.name} value={item.value} key={index}/>)}
        </div>
    )
}
