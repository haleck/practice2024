import React, {useState} from 'react';
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import Separator from "../../UI/Separator/Separator.jsx";
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";
import {useInput} from "../../hooks/useInput.js";
import classes from "../styles/FormsCommonStyles.module.css"

const EmailPasswordAuth = ({authMethodChange}) => {
    const email = useInput('', {notEmpty: true, minLength: 5, maxLength: 50, isEmail: true})
    const password = useInput('', {notEmpty: true, minLength: 8, maxLength: 50, isPassword: true})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка формы на сервер')
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputField
                    labelText="Email:"
                    type="email"
                    name="email"
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    required
                />
                {email.isDirty && email.error && <div className={classes.error}>{email.errorText}</div>}
                <InputField
                    labelText="Password:"
                    type="password"
                    name="password"
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    required
                />
                {password.isDirty && password.error && <div className={classes.error}>{password.errorText}</div>}
                <Button type="submit" disabled={email.error || password.error}>Войти</Button>
            </form>

            <CustomLink path={'/reg'}>Нет аккаунта? Регистрация</CustomLink>

            <Separator text={"или"}/>

            <Button onClick={()=> authMethodChange('phone')}>Вход по номеру телефона</Button>
            <Button onClick={() => authMethodChange('telegram')}>Вход по коду из ТГ бота</Button>
        </>
    );
};

export default EmailPasswordAuth;