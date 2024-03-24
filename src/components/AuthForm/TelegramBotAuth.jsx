import React from 'react';
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";
import Separator from "../../UI/Separator/Separator.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import InputField from "../../UI/InputField/InputField.jsx";
import {useInput} from "../../hooks/useInput.js";
import classes from "../styles/FormsCommonStyles.module.css";

const TelegramBotAuth = ({authMethodChange}) => {
    const tgCode = useInput('', {notEmpty: true, isDigit: true, requiredLength: 5})

    return (
        <>
            <InputField
                labelText={"Код тг:"}
                name="code"
                type="text"
                id="code"
                value={tgCode.value}
                onChange={tgCode.onChange}
                onBlur={tgCode.onBlur}
                required
            />
            {tgCode.isDirty && tgCode.error && <div className={classes.error}>{tgCode.errorText}</div>}

            <Button type={"submit"} disabled={tgCode.error}>ОК</Button>

            <CustomLink path={'/reg'}>Нет аккаунта? Регистрация</CustomLink>

            <Separator text={'или'}/>

            <Button onClick={()=> authMethodChange('email')}>Вход по почте и паролю</Button>
            <Button onClick={()=> authMethodChange('phone')}>Вход по номеру телефона</Button>
        </>
    );
};

export default TelegramBotAuth;