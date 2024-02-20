import React, {useState} from 'react';
import classes from "./AuthForm.module.css";
import {useNavigate} from "react-router-dom";

const EmailPasswordAuth = ({authMethodChange}) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка формы на сервер')
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={classes.inputBlock}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={classes.inputBlock}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={classes.stdBtn + " " + classes.mainBtn}>Войти</button>
            </form>

            <a className={classes.registration} onClick={()=>navigate('/reg')}>Нет аккаунта? Регистрация</a>

            <div className={classes.alt}>
                <hr />
                <span>или</span>
            </div>

            <div>
                <button
                    className={classes.stdBtn}
                    onClick={ ()=> authMethodChange('phone')}
                >
                    Вход по номеру телефона
                </button>
                <button
                    className={classes.stdBtn}
                    onClick={() => authMethodChange('telegram')}
                >
                    Вход по коду из ТГ бота
                </button>
            </div>
        </>
    );
};

export default EmailPasswordAuth;