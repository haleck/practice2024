import { useEffect, useState } from "react";

export const useValidation = (value, validations={}) => {
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const newErrors = []

        for (const validation in validations) {
            switch (validation) {
                case 'notEmpty':
                    if (!value) {
                        newErrors.push('Поле не может быть пустым')
                    }
                    break;
                case 'minLength':
                    const minLength = validations[validation]
                    if (value.length < minLength) {
                        newErrors.push(`Поле не может быть меньше ${minLength} символов`)
                    }
                    break;
                case 'requiredLength':
                    if (value.length !== validations[validation]) {
                        newErrors.push(`Поле должно содержать ${validations[validation]} символов`)
                    }
                    break;
                case 'maxLength':
                    const maxLength = validations[validation]
                    if (value.length > maxLength) {
                        newErrors.push(`Поле не может быть больше ${maxLength} символов`)
                    }
                    break;
                case 'isEmail':
                    const emailRegex = /\S+@\S+\.\S+/
                    if (!emailRegex.test(value)) {
                        newErrors.push(`Введите корректный email адрес`)
                    }
                    break;
                case 'isPassword':
                    const passwordRegex = /^(?=.*[\p{Ll}])(?=.*[\p{Lu}])(?=.*\d).*$/u
                    if (!passwordRegex.test(value)) {
                        newErrors.push(`Пароль должен содержать заглавные и строчные буквы, а также цифры`)
                    }
                    break;
                case 'isPhoneNumber':
                    const phoneNumberRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/
                    if (!phoneNumberRegex.test(value)) {
                        newErrors.push("Неверный формат номера телефона");
                    }
                    break;
                case 'isDigit':
                    const digitRegex = /^\d+$/;
                    if (!digitRegex.test(value)) {
                        newErrors.push("Поле должно содержать только цифры");
                    }
                    break;
            }
        }

        setErrors(newErrors)
    }, [value])

    return {
        error: errors.length !== 0,
        errorText: errors[0]
    }
}
