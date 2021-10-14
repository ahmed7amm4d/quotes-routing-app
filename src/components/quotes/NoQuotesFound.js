import React from "react";

import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
    return (
        <div className={classes.noquotes}>
            <p>No Quotes Found!</p>
            <button className="btn">
                Add a Quote
            </button>
        </div>
    );
};

export default NoQuotesFound;