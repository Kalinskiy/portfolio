import React from 'react';
import style from './Input.module.scss'


type PropsType = {
    placeholder: string
    type: string

}
const Input = (props: PropsType) => {
    return (
        <>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={style.input}
            />
        </>
    );
};

export default Input;