import React from 'react';
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";
import Separator from "../../UI/Separator/Separator.jsx";
import Button from "../../UI/StdBtn/Button.jsx";

const TelegramBotAuth = ({authMethodChange}) => {
    return (
        <>
            Tg bot auth

            <CustomLink path={'/reg'}>Нет аккаунта? Регистрация</CustomLink>

            <Separator text={'или'}/>

            <Button onClick={()=> authMethodChange('email')}>Вход по почте и паролю</Button>
            <Button onClick={()=> authMethodChange('phone')}>Вход по номеру телефона</Button>
        </>
    );
};

export default TelegramBotAuth;