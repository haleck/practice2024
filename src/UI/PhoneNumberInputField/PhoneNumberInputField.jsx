import React, {useRef} from 'react';
import classes from "./PhoneNumberInputField.module.css";

const PhoneNumberInputField = ({ labelText, value, setValue}) => {
    const inputRef = useRef(null);
    const handleInputChange = (e) => {
        let inputValue = e.target.value;

        const numericValue = inputValue.replace(/\D/g, '');

        let formattedValue = '';
        if (numericValue.length > 0) {
            formattedValue = `+7 (${numericValue.slice(1, 4)}`;
        }
        if (numericValue.length > 3) {
            formattedValue += `) ${numericValue.slice(4, 7)}`;
        }
        if (numericValue.length > 6) {
            formattedValue += `-${numericValue.slice(7, 9)}`;
        }
        if (numericValue.length > 8) {
            formattedValue += `-${numericValue.slice(9, 11)}`;
        }

        setValue(formattedValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Backspace' && !value) {
            return;
        }
        if (e.key === 'Backspace' || e.key === 'Delete') {
            e.preventDefault();

            const twoLastChars = value.slice(-2)
            if (twoLastChars === '+7') {
                return
            }

            const lastChar = value.charAt(value.length - 1);
            if (lastChar === ')' || lastChar === '(' || lastChar === '-') {
                setValue((prev) => prev.slice(0, -2));
            } else if (lastChar === " ") {
                setValue((prev) => prev.slice(0, -3));
            } else {
                setValue((prev) => prev.slice(0, -1));
            }
        }
    };

    const handleInputClick = () => {
        inputRef.current.setSelectionRange(value.length, value.length);
    };

    return (
        <div className={classes.inputBlock}>
            <label htmlFor="phone">{labelText}</label>
            <input
                ref={inputRef}
                type="tel"
                name="phone"
                id="phone"
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onClick={handleInputClick}
                required
            />
        </div>
    );
};

export default PhoneNumberInputField;