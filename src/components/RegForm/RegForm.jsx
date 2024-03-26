import React, {useState} from 'react';
import classes from "../styles/FormsCommonStyles.module.css";
import {useNavigate} from "react-router-dom";
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";
import {useInput} from "../../hooks/useInput.js";
import PhoneNumberInputField from "../../UI/PhoneNumberInputField/PhoneNumberInputField.jsx";

const RegForm = () => {
    const navigate = useNavigate()

    const email = useInput('', {notEmpty: true, minLength: 5, maxLength: 50, isEmail: true})
    const password = useInput('', {notEmpty: true, minLength: 8, maxLength: 50, isPassword: true})
    const repeat = useInput('', {notEmpty: true, minLength: 8, maxLength: 50, isPassword: true})
    const name = useInput('', {notEmpty: true, minLength: 1, maxLength: 50})
    const surname = useInput('', {notEmpty: true, minLength: 1, maxLength: 50})
    const phoneNumber = useInput('+7', {isPhoneNumber: true})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка формы регистрации на сервер')
    };

    const buttonIsDisabled = () => {
        return email.error || password.error || repeat.error || password.value !== repeat.value || name.error || surname.error || phoneNumber.error
    }

    return (
        <div className={classes.formBlock}>
            <h2>Регистрация</h2>

            <form action="" onSubmit={handleSubmit}>
                <InputField
                    labelText={'Введите почту:'}
                    type="email"
                    name="email"
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    placeholder={'Example@gmail.com'}
                    required
                />
                {email.isDirty && email.error && <div className={classes.error}>{email.errorText}</div>}
                <InputField
                    labelText={'Введите имя:'}
                    type="text"
                    name="name"
                    value={name.value}
                    onChange={name.onChange}
                    onBlur={name.onBlur}
                    placeholder={'Ваше имя'}
                    required
                />
                {name.isDirty && name.error && <div className={classes.error}>{name.errorText}</div>}
                <InputField
                    labelText={'Введите фамилию:'}
                    type="text"
                    name="surname"
                    value={surname.value}
                    onChange={surname.onChange}
                    onBlur={surname.onBlur}
                    placeholder={'Ваша фамилия'}
                    required
                />
                {surname.isDirty && surname.error && <div className={classes.error}>{surname.errorText}</div>}
                <PhoneNumberInputField
                    labelText={"Введите номер телефона:"}
                    value={phoneNumber.value}
                    setValue={phoneNumber.setValue}
                    onBlur={phoneNumber.onBlur}
                />
                {phoneNumber.isDirty && phoneNumber.error && <div className={classes.error}>{phoneNumber.errorText}</div>}
                <InputField
                    labelText={'Введите пароль:'}
                    type="password"
                    name="password"
                    value={password.value}
                    onChange={password.onChange}
                    onBlur={password.onBlur}
                    placeholder={'********'}
                    required
                />
                {password.isDirty && password.error && <div className={classes.error}>{password.errorText}</div>}
                <InputField
                    labelText={'Введите пароль повторно:'}
                    type="password"
                    name="repeat"
                    value={repeat.value}
                    onChange={repeat.onChange}
                    onBlur={repeat.onBlur}
                    placeholder={'********'}
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