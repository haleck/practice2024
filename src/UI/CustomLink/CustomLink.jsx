import React from 'react';
import classes from "../../components/styles/FormsCommonStyles.module.css";
import {useNavigate} from "react-router-dom";

const CustomLink = ({path ,children}) => {
    const navigate = useNavigate()

    return (
        <a className={classes.registration} onClick={()=>navigate(path)}>
            {children}
        </a>
    );
};

export default CustomLink;