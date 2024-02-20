import React, {useState} from 'react';
import classes from "./RegForm.module.css";
import {useNavigate} from "react-router-dom";

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
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={classes.inputBlock}>
                    <label>Surname:</label>
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
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
                <div className={classes.inputBlock}>
                    <label>Repeat:</label>
                    <input
                        type="password"
                        name="repeat"
                        value={formData.repeat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={classes.stdBtn + " " + classes.mainBtn}>Зарегистрироваться</button>
            </form>

            <a className={classes.login} onClick={()=>navigate('/auth')}>Уже есть аккаунт? Вход</a>
        </div>
    );
};

export default RegForm;