import React from 'react';
import classes from "./InputField.module.css";

const InputField = ({labelText, ref, type, name, value, onChange, onKeyDown, onClick, isRequired=false}) => {
    return (
        <div className={classes.inputBlock}>
            <label>{labelText}</label>
            <input
                ref={ref}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onClick={onClick}
                required={isRequired}
            />
        </div>
    );
};

export default InputField;