import { useEffect, useState } from "react";

export const useValidation = (value, validations={}) => {
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const newErrors = []
        const sortedValidations = {
            isEmpty: validations['isEmpty'] || false,
            minLength: validations['minLength'] || null,
            maxLength: validations['maxLength'] || null
        }

        for (const validation in sortedValidations) {
            switch (validation) {
                case 'isEmpty':
                    if (!value) {
                        newErrors.push('Поле не может быть пустым')
                    }
                    break;
                case 'minLength':
                    const minLength = sortedValidations[validation]
                    if (value.length < minLength) {
                        newErrors.push(`Поле не может быть меньше ${minLength} символов`)
                    }
                    break;
                case 'maxLength':
                    const maxLength = sortedValidations[validation]
                    if (value.length > maxLength) {
                        newErrors.push(`Поле не может быть больше ${maxLength} символов`)
                    }

            }
        }

        setErrors(newErrors)
    }, [value])

    return {
        error: errors.length !== 0,
        errorText: errors[0]
    }
}
