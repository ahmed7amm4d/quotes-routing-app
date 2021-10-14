import React from "react";
import { Link } from "react-router-dom";

import classes from './HighlightedQuote.module.css';
import { HiArrowSmLeft } from "react-icons/hi";

const HighlightedQuote = (props) => {
    return (
        <React.Fragment>
            <figure className={classes.quote}>
                <p>
                    {props.text}
                </p>
                <figcaption>
                    {props.author}
                </figcaption>
            </figure>
            <div>
                <Link to='/quotes' className='back'><HiArrowSmLeft />Back to Quotes</Link>
            </div>
        </React.Fragment>
    );
};

export default HighlightedQuote;