import React from 'react';
import classes from "./InputField.module.css";

const InputField = ({labelText, ...props}) => {
    return (
        <div className={classes.inputBlock}>
            <label>{labelText}</label>
            <input
                {...props}
            />
        </div>
    );
};

export default InputField;