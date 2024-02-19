import React, {useEffect, useRef, useState} from 'react';
import classes from "./AuthForm.module.css";

const PhoneNumberAuth = ({authMethodChange}) => {
    const [phoneNumber, setPhoneNumber] = useState('+7');
    const [isSmsSent, setIsSmsSent] = useState(false);
    const [timer, setTimer] = useState(60)
    const [smsCode, setSmsCode] = useState('')
    const inputRef = useRef(null);

    const handleInputChange = (e) => {
        let inputValue = e.target.value;

        const numericValue = inputValue.replace(/\D/g, '');

        let formattedValue = '';
        if (numericValue.length > 0) {
            formattedValue = `+7 (${numericValue.slice(1, 4)}`;
        }
        if (numericValue.length > 3) {
            formattedValue += `) ${numericValue.slice(4, 7)}`;
        }
        if (numericValue.length > 6) {
            formattedValue += `-${numericValue.slice(7, 9)}`;
        }
        if (numericValue.length > 8) {
            formattedValue += `-${numericValue.slice(9, 11)}`;
        }

        setPhoneNumber(formattedValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Backspace' && !phoneNumber) {
            return;
        }
        if (e.key === 'Backspace' || e.key === 'Delete') {
            e.preventDefault();

            const twoLastChars = phoneNumber.slice(-2)
            if (twoLastChars === '+7') {
                return
            }

            const lastChar = phoneNumber.charAt(phoneNumber.length - 1);
            if (lastChar === ')' || lastChar === '(' || lastChar === '-') {
                setPhoneNumber((prev) => prev.slice(0, -2));
            } else if (lastChar === " ") {
                setPhoneNumber((prev) => prev.slice(0, -3));
            } else {
                setPhoneNumber((prev) => prev.slice(0, -1));
            }
        }
    };

    const handleInputClick = () => {
        inputRef.current.setSelectionRange(phoneNumber.length, phoneNumber.length);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка формы на сервер')
    };

    const sendSms = (e) => {
        e.preventDefault()
        setIsSmsSent(true)

        const intervalId = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 1) {
                    clearInterval(intervalId);
                    return '';
                }
                return prevTimer - 1;
            });
        }, 1000);
    }

    return (
        <>
            <>
                {isSmsSent?
                    <form onSubmit={handleSubmit}>
                        <div className={classes.inputBlock}>
                            <label htmlFor="phone">Код из смс:</label>
                            <input
                                name="code"
                                type="text"
                                id="code"
                                value={smsCode}
                                onChange={(e)=>setSmsCode(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={classes.stdBtn + " " + classes.mainBtn}>ОК</button>
                        <div className={classes.sendAgain}>
                            {timer > 0?
                                <span>Отправить код повторно можно через {timer > 0? timer : ''} сек</span>
                                :
                                <a>Отправить код повторно</a>
                            }
                        </div>
                    </form>
                    :
                    <form onSubmit={handleSubmit}>
                        <div className={classes.inputBlock}>
                            <label htmlFor="phone">Телефон:</label>
                            <input
                                ref={inputRef}
                                type="tel"
                                name="phone"
                                id="phone"
                                value={phoneNumber}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                onClick={handleInputClick}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={classes.stdBtn + " " + classes.mainBtn}
                            onClick={(e)=>sendSms(e)}
                        >
                            Получить код
                        </button>
                    </form>
                }
            </>

            <div className={classes.alt}>
                <hr />
                <span>или</span>
            </div>

            <div>
                <button
                    className={classes.stdBtn}
                    onClick={()=> authMethodChange('email')}
                >
                    Вход по почте и паролю
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

export default PhoneNumberAuth;