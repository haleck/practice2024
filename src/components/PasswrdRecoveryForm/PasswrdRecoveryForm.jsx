import React, {useState} from 'react';
import classes from "../styles/FormsCommonStyles.module.css";
import {useNavigate} from "react-router-dom";
import InputField from "../../UI/InputField/InputField.jsx";
import Button from "../../UI/StdBtn/Button.jsx";

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
                    <InputField
                        labelText={'Email:'}
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isRequired={true}
                    />
                    <Button type={'submit'}>Восстановить</Button>
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