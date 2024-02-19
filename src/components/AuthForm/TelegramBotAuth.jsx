import React from 'react';
import classes from "./AuthForm.module.css";

const TelegramBotAuth = ({authMethodChange}) => {
    return (
        <>
            Tg bot auth
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