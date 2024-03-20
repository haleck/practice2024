import React from 'react';
import {useNavigate} from "react-router-dom";
import classes from "./CustomLink.module.css";

const CustomLink = ({path ,children}) => {
    const navigate = useNavigate()

    return (
        <a className={classes.registration} onClick={()=>navigate(path)}>
            {children}
        </a>
    );
};

export default CustomLink;