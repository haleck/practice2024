import React from 'react';
import classes from "./Button.module.css";

const Button = ({type, onClick, children, ...props}) => {

    return (
        <button
            type={type}
            className={type==="submit"? `${classes.stdBtn} ${classes.submitBtn}`: classes.stdBtn}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;