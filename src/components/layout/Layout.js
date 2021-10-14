import React from "react";

import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <React.Fragment>
            <MainNavigation />
            <hr className={classes.hr1} />
            <main className={classes.main}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;