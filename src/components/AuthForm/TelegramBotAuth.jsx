import React from 'react';
import classes from "./AuthForm.module.css";
import {useNavigate} from "react-router-dom";

const TelegramBotAuth = ({authMethodChange}) => {
    const navigate = useNavigate()

    return (
        <>
            Tg bot auth
            <a className={classes.registration} onClick={()=>navigate('/reg')}>Нет аккаунта? Регистрация</a>

            <div className={classes.alt}>
                <hr />
                <span>или</span>
            </div>

            <div>
                <button
                    className={classes.stdBtn}
                    onClick={ ()=> authMethodChange('email')}
                >
                    Вход по почте и паролю
                </button>
                <button
                    className={classes.stdBtn}
                    onClick={() => authMethodChange('phone')}
                >
                    Вход по номеру телефона
                </button>
            </div>
        </>
    );
};

export default TelegramBotAuth;