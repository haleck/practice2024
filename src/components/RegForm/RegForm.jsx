import React, {useState} from 'react';
import classes from "../styles/FormsCommonStyles.module.css";
import {useNavigate} from "react-router-dom";
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";
import {useInput} from "../../hooks/useInput.js";

const RegForm = () => {
    const navigate = useNavigate()

    const email = useInput('', {notEmpty: true, minLength: 5, maxLength: 50, isEmail: true})
    const password = useInput('', {notEmpty: true, minLength: 8, maxLength: 50, isPassword: true})
    const repeat = useInput('', {notEmpty: true, minLength: 8, maxLength: 50, isPassword: true})
    const name = useInput('', {notEmpty: true, minLength: 1, maxLength: 50})
    const surname = useInput('', {notEmpty: true, minLength: 1, maxLength: 50})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка формы регистрации на сервер')
    };

    const buttonIsDisabled = () => {
        return email.error || password.error || repeat.error || password.value !== repeat.value || name.error || surname.error
    }

    return (
        <div className={classes.formBlock}>
            <h2>Регистрация</h2>

            <form action="" onSubmit={handleSubmit}>
                <InputField
                    labelText={'Email:'}
                    type="email"
                    name="email"
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    required
                />
                {email.isDirty && email.error && <div className={classes.error}>{email.errorText}</div>}
                <InputField
                    labelText={'Name:'}
                    type="text"
                    name="name"
                    value={name.value}
                    onChange={name.onChange}
                    onBlur={name.onBlur}
                    required
                />
                {name.isDirty && name.error && <div className={classes.error}>{name.errorText}</div>}
                <InputField
                    labelText={'Surname:'}
                    type="text"
                    name="surname"
                    value={surname.value}
                    onChange={surname.onChange}
                    onBlur={surname.onBlur}
                    required
                />
                {surname.isDirty && surname.error && <div className={classes.error}>{surname.errorText}</div>}
                <InputField
                    labelText={'Password:'}
                    type="password"
                    name="password"
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    required
                />
                {password.isDirty && password.error && <div className={classes.error}>{password.errorText}</div>}
                <InputField
                    labelText={'Repeat:'}
                    type="password"
                    name="repeat"
                    value={repeat.value}
                    onChange={repeat.onChange}
                    onBlur={repeat.onBlur}
                    required
                />
                {repeat.isDirty && repeat.error && <div className={classes.error}>{repeat.errorText}</div>}
                {password.value !== repeat.value && <div className={classes.error}>Пароли не совпадают</div>}
                <Button type={'submit'} disabled={buttonIsDisabled()}>Зарегистрироваться</Button>
            </form>

            <CustomLink path={'/auth'}>Уже есть аккаунт? Вход</CustomLink>
        </div>
    );
};

export default RegForm;