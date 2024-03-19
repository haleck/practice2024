import React from 'react';
import classes from "../../components/styles/FormsCommonStyles.module.css";

const Button = ({type, onClick, children}) => {

    return (
        <button
            type={type}
            className={type==="submit"? `${classes.stdBtn} ${classes.mainBtn}`: classes.stdBtn}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;