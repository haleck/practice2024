import React, { useRef } from 'react';
import classes from './Popup.module.css';

const Popup = ({ isOpen, setIsOpen, text }) => {
    const popupRef = useRef(null);

    const closePopup = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            closePopup();
        }
    };

    return (
        <>
            {isOpen &&
                <div className={classes.popup} onClick={handleClickOutside}>
                    <div ref={popupRef} className={classes.popupContent}>
                        <span className={classes.closeBtn} onClick={closePopup}>&times;</span>
                        <p className={classes.text}>{text}</p>
                    </div>
                </div>
            }
        </>
    );
};

export default Popup;

