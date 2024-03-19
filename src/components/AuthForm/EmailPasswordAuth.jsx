import React, {useState} from 'react';
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import Separator from "../../UI/Separator/Separator.jsx";
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";

const EmailPasswordAuth = ({authMethodChange}) => {
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
                <InputField
                    labelText="Email:"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isRequired={true}
                />
                <InputField
                    labelText="Password:"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isRequired={true}
                />
                <Button type="submit" styles={{backgroundColor: "rgba(36, 36, 36, 0.05)"}}>
                    Войти
                </Button>
            </form>

            <CustomLink path={'/reg'}>Нет аккаунта? Регистрация</CustomLink>

            <Separator text={"или"}/>

            <Button onClick={()=> authMethodChange('phone')}>Вход по номеру телефона</Button>
            <Button onClick={() => authMethodChange('telegram')}>Вход по коду из ТГ бота</Button>
        </>
    );
};

export default EmailPasswordAuth;