import React from 'react'
import classes from "./InfoList.module.css"

const infoList = (props) => {
  return (
    <li className={classes.infoListItem}>
        <h2 className={classes.infoLists}>{props.name}</h2>
        <h4 className={classes.infoLists}>{props.title}</h4>
        <p className={classes.infoLists}>{props.description}</p>
    </li>
  )
}

export default infoList