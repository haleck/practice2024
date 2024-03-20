import React from 'react';
import classes from "./Separator.module.css";

const Separator = ({text}) => {
    return (
        <div className={classes.alt}>
            <hr />
            <span>{text}</span>
        </div>
    );
};

export default Separator;