import React, {useState} from 'react';
import classes from "../styles/FormsCommonStyles.module.css";
import {useNavigate} from "react-router-dom";
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";

const PasswrdChangeForm = ({fromEmail}) => {
    const navigate = useNavigate()

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [changeRequestSent, setChangeRequestSent] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setChangeRequestSent(true)
        console.log('Отправка формы регистрации на сервер')
    };

    return (
        <div className={classes.formBlock}>
            <h2>Смена пароля</h2>

            {!changeRequestSent?
                <form action="" onSubmit={handleSubmit}>
                    {/*Если пользователь перешел не через письмо на почте - требуется ввести старый пароль*/}
                    {!fromEmail &&
                        <InputField
                            labelText={'Old:'}
                            type="password"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            isRequired={true}
                        />
                    }
                    {/*Иначе - пользователь восстанавливает пароль, который не знает*/}
                    <InputField
                        labelText={'New:'}
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        isRequired={true}
                    />
                    <InputField
                        labelText={'Repeat:'}
                        type="password"
                        name="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        isRequired={true}
                    />
                    <Button type={'submit'}>Сменить</Button>
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