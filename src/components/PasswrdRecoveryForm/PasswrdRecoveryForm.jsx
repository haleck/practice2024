import React, {useState} from 'react';
import classes from "./PasswrdRecoveryForm.module.css";
import {useNavigate} from "react-router-dom";

const PasswrdRecoveryForm = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [linkIsSent, setLinkIsSent] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLinkIsSent(true)
        console.log('Отправка формы регистрации на сервер')
    };

    return (
        <div className={classes.formBlock}>
            <h2>Восстановление пароля</h2>

            {!linkIsSent?
                <form action="" onSubmit={handleSubmit}>
                    <div className={classes.inputBlock}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={classes.stdBtn + " " + classes.mainBtn}>Восстановить</button>
                </form>
            :
                <div style={{textAlign: 'center'}}>
                    <div style={{margin: '10px 0'}}>На вашу почту было отправлено письмо для восстановления пароля</div>
                    <button className={classes.stdBtn} onClick={()=>navigate('/auth')}>
                        ОК
                    </button>
                </div>
            }
        </div>
    );
};

export default PasswrdRecoveryForm;