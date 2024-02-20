import React, {useState} from 'react';
import classes from "./PasswrdChangeForm.module.css";
import {useNavigate} from "react-router-dom";

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
                    {!fromEmail &&
                        <div className={classes.inputBlock}>
                            <label>Old:</label>
                            <input
                                type="password"
                                name="oldPassword"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </div>
                    }
                    <div className={classes.inputBlock}>
                        <label>New:</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className={classes.inputBlock}>
                        <label>Repeat:</label>
                        <input
                            type="password"
                            name="repeatPassword"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={classes.stdBtn + " " + classes.mainBtn}>Сменить</button>
                </form>
            :
                <div style={{textAlign: 'center'}}>
                    <div style={{margin: '10px 0'}}>Пароль был успешно изменен</div>
                    <button className={classes.stdBtn} onClick={()=>navigate('/auth')}>
                        ОК
                    </button>
                </div>
            }
        </div>
    );
};

export default PasswrdChangeForm;