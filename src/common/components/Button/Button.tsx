import React from 'react';
import style from './Button.module.scss'

type PropsType = {
    title: string
    onClick?: () => void
}
const Button = (props: PropsType) => {
    return (
        <button
            className={style.button}
            onClick={props.onClick}>
            {props.title}
        </button>
    );
};

export default Button;