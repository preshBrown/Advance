import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'
// import classes from "./httpError.module.css"

const HttpError = (props) => {
    const error = useRouteError()
   
    
  return (
    <React.Fragment>
    {/* <header className={classes.Errorheader}>
        <nav>
            <ul className={classes.ErrorItems}>
                <li className={classes.ErrorItem}>
                    <NavLink className={navData => navData.isActive ? classes.active : ''}  to="/">Welcome</NavLink>
                </li>
                <li className={classes.ErrorItem}>
                <NavLink className={navData => navData.isActive ? classes.active : ''} to="/products">Product</NavLink>
                </li>
            </ul>
        </nav>
    </header> */}
    <main>
        <h1>An error occured</h1>
        <p>{error.message} - {error.statusCode}</p>
    </main>
    </React.Fragment>
  )
}

export default HttpError