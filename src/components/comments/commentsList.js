import React from "react";

import classes from './commentsList.module.css';
import CommentItem from "./CommentItem";

const commentsList = (props) => {
    return (
        <ul className={classes.comments}>
            {props.comments.map((comment) => {
                return <CommentItem key={comment.id} text={comment.text} />
            })}
        </ul>
    );
};

export default commentsList;