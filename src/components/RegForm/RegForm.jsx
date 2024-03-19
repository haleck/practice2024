import React, {useState} from 'react';
import classes from "../styles/FormsCommonStyles.module.css";
import {useNavigate} from "react-router-dom";
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import CustomLink from "../../UI/CustomLink/CustomLink.jsx";

const RegForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeat: '',
        name: '',
        surname: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка формы регистрации на сервер')
    };

    return (
        <div className={classes.formBlock}>
            <h2>Регистрация</h2>

            <form action="" onSubmit={handleSubmit}>
                <InputField
                    labelText={'Email:'}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isRequired={true}
                />
                <InputField
                    labelText={'Name:'}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isRequired={true}
                />
                <InputField
                    labelText={'Surname:'}
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    isRequired={true}
                />
                <InputField
                    labelText={'Password:'}
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isRequired={true}
                />
                <InputField
                    labelText={'Repeat:'}
                    type="password"
                    name="repeat"
                    value={formData.repeat}
                    onChange={handleChange}
                    isRequired={true}
                />
                <Button type={'submit'}>Зарегистрироваться</Button>
            </form>

            <CustomLink path={'/auth'}>Уже есть аккаунт? Вход</CustomLink>
        </div>
    );
};

export default RegForm;