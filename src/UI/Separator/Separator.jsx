import React from 'react';
import classes from "../../components/styles/FormsCommonStyles.module.css";

const Separator = ({text}) => {
    return (
        <div className={classes.alt}>
            <hr />
            <span>{text}</span>
        </div>
    );
};

export default Separator;