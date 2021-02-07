import React from 'react';
import style from './Title.module.scss'

type PropsType = {
    title: string
}
const Title = (props: PropsType) => {
    return (
        <h2 className={style.title}>
            My <span>{props.title}</span>
        </h2>

    );
};

export default Title;