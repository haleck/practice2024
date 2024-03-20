import React, {useState} from 'react';
import classes from "../styles/FormsCommonStyles.module.css";
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import PhoneNumberInputField from "../../UI/PhoneNumberInputField/PhoneNumberInputField.jsx";
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";
import Separator from "../../UI/Separator/Separator.jsx";

const PhoneNumberAuth = ({authMethodChange}) => {
    const [phoneNumber, setPhoneNumber] = useState('+7');
    const [isSmsSent, setIsSmsSent] = useState(false);
    const [timer, setTimer] = useState(60)
    const [smsCode, setSmsCode] = useState('')

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
            {isSmsSent?
                <form onSubmit={handleSubmit}>
                    <InputField
                        labelText={"Код из смс:"}
                        name="code"
                        type="text"
                        id="code"
                        value={smsCode}
                        onChange={(e)=>setSmsCode(e.target.value)}
                        required
                    />

                    <Button type={"submit"}>ОК</Button>

                    <div className={classes.sendAgain}>
                        {timer > 0?
                            <span>Отправить код повторно можно через {timer > 0? timer : ''} сек</span>
                            :
                            <a style={{textDecoration: 'underline'}}>Отправить код повторно</a>
                        }
                    </div>
                </form>
                :
                <form onSubmit={handleSubmit}>
                    <PhoneNumberInputField
                        labelText={"Телефон:"}
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                    />

                    <Button type={"submit"} onClick={(e)=>sendSms(e)}>
                        Получить код
                    </Button>
                </form>
            }

            <CustomLink path={'/reg'}>Нет аккаунта? Регистрация</CustomLink>

            <Separator text={'или'} />

            <Button onClick={()=> authMethodChange('email')}>Вход по почте и паролю</Button>
            <Button onClick={()=> authMethodChange('telegram')}>Вход по коду из ТГ бота</Button>
        </>
    );
};

export default PhoneNumberAuth;