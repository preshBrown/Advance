import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <React.Fragment>
        <header className={classes.Mainheader}>
            <nav>
                <ul className={classes.Items}>
                    <li className={classes.Item}>
                        <NavLink className={navData => navData.isActive ? classes.active : ''}  to="/">Welcome</NavLink>
                    </li>
                    <li className={classes.Item}>
                    <NavLink className={navData => navData.isActive ? classes.active : ''} to="/products">Product</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>

        <footer>
            <h1>FOOTER</h1>
        </footer>
    </React.Fragment>
  )
}

export default Layout;