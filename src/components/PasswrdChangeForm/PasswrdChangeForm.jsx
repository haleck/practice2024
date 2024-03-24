import React, {useState} from 'react';
import classes from "../styles/FormsCommonStyles.module.css";
import {useNavigate} from "react-router-dom";
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import {useInput} from "../../hooks/useInput.js";

const PasswrdChangeForm = ({fromEmail}) => {
    const navigate = useNavigate()

    const oldPassword = useInput('', {notEmpty: true})
    const newPassword = useInput('', {notEmpty: true, minLength: 8, maxLength: 50, isPassword: true})
    const repeatPassword = useInput('', {notEmpty: true, minLength: 8, maxLength: 50, isPassword: true})

    const [changeRequestSent, setChangeRequestSent] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setChangeRequestSent(true)
        console.log('Отправка формы регистрации на сервер')
    };

    const buttonIsDisabled = () => {
        if (fromEmail) {
            return newPassword.error || repeatPassword.error || newPassword.value !== repeatPassword.value
        } else {
            return oldPassword.error || newPassword.error || repeatPassword.error || newPassword.value !== repeatPassword.value
        }
    }

    return (
        <div className={classes.formBlock}>
            <h2>Смена пароля</h2>

            {!changeRequestSent?
                <form action="" onSubmit={handleSubmit}>
                    {/*Если пользователь перешел не через письмо на почте - требуется ввести старый пароль*/}
                    {!fromEmail &&
                        <>
                            <InputField
                                labelText={'Old:'}
                                type="password"
                                name="oldPassword"
                                value={oldPassword.value}
                                onChange={oldPassword.onChange}
                                onBlur={oldPassword.onBlur}
                                required
                            />
                            {oldPassword.isDirty && oldPassword.error && <div className={classes.error}>{oldPassword.errorText}</div>}
                        </>
                    }
                    {/*Иначе - пользователь восстанавливает пароль, который не знает*/}
                    <InputField
                        labelText={'New:'}
                        type="password"
                        name="newPassword"
                        value={newPassword.value}
                        onChange={newPassword.onChange}
                        onBlur={newPassword.onBlur}
                        required
                    />
                    {newPassword.isDirty && newPassword.error && <div className={classes.error}>{newPassword.errorText}</div>}
                    <InputField
                        labelText={'Repeat:'}
                        type="password"
                        name="repeatPassword"
                        value={repeatPassword.value}
                        onChange={repeatPassword.onChange}
                        onBlur={repeatPassword.onBlur}
                        required
                    />
                    {repeatPassword.isDirty && repeatPassword.error && <div className={classes.error}>{repeatPassword.errorText}</div>}
                    {newPassword.value !== repeatPassword.value && <div className={classes.error}>Пароли не совпадают</div>}
                    <Button type={'submit'} disabled={buttonIsDisabled()}>Сменить</Button>
                </form>
            :
                <div style={{textAlign: 'center'}}>
                    <div style={{margin: '10px 0'}}>Пароль был успешно изменен</div>
                    <Button onClick={()=>navigate('/auth')}>ОК</Button>
                </div>
            }
        </div>
    );
};

export default PasswrdChangeForm;