import React, {useState} from 'react';
import classes from "../styles/FormsCommonStyles.module.css";
import {useNavigate} from "react-router-dom";
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";
import {useInput} from "../../hooks/useInput.js";

const PasswrdRecoveryForm = () => {
    const navigate = useNavigate()

    // const [email, setEmail] = useState('')
    const email = useInput('', {notEmpty: true, minLength: 5, maxLength: 50, isEmail: true})

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
                    <InputField
                        labelText={'Email:'}
                        type="email"
                        name="email"
                        value={email.value}
                        onChange={email.onChange}
                        onBlur={email.onBlur}
                        required
                    />
                    {email.isDirty && email.error && <div className={classes.error}>{email.errorText}</div>}
                    <Button type={'submit'} disabled={email.error}>Восстановить</Button>
                </form>
            :
                <div style={{textAlign: 'center'}}>
                    <div style={{margin: '10px 0'}}>На вашу почту было отправлено письмо для восстановления пароля</div>
                    <Button onClick={()=>navigate('/auth')}>ОК</Button>
                </div>
            }
        </div>
    );
};

export default PasswrdRecoveryForm;