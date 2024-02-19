import React, { useState } from 'react';
import classes from "./AuthForm.module.css";
import EmailPasswordAuth from "./EmailPasswordAuth.jsx";
import PhoneNumberAuth from "./PhoneNumberAuth.jsx";
import TelegramBotAuth from "./TelegramBotAuth.jsx";

const AuthForm = ({authWith}) => {
    const [authMethod, setAuthMethod] = useState(authWith);
    const renderAuthComponent = () => {
        switch (authMethod) {
            case 'phone':
                return <PhoneNumberAuth authMethodChange={(newMethod)=>setAuthMethod(newMethod)}/>;
            case 'telegram':
                return <TelegramBotAuth authMethodChange={(newMethod)=>setAuthMethod(newMethod)}/>;
            case 'email':
                return <EmailPasswordAuth authMethodChange={(newMethod)=>setAuthMethod(newMethod)}/>;
            default:
                return <EmailPasswordAuth authMethodChange={(newMethod)=>setAuthMethod(newMethod)}/>;
        }
    };

    return (
        <div className={classes.formBlock}>
            <h2>Авторизация</h2>
            {renderAuthComponent()}
        </div>
    );
};

export default AuthForm;
