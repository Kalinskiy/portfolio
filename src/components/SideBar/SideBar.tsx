import React, {useCallback, useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './SideBar.module.css'
import home from '../../assets/icons/home.png'
import about from '../../assets/icons/about.png'
import portfolio from '../../assets/icons/portfolio.png'
import contacts from '../../assets/icons/contacts.png'


const SideBar = () => {
    const [toggledButtonId, setToggledButtonId] = useState(null);
    const onActiveHandle = (button: any) => {
        setToggledButtonId(button.id);
    }
    type ButtonType = {
        id: number
        link: string
        src: any

    }
    const buttons: Array<ButtonType> = [
        {id: 1, link: '/home', src: home},
        {id: 2, link: '/about', src: about},
        {id: 3, link: '/projects', src: portfolio},
        {id: 4, link: '/contacts', src: contacts},
    ]

    return (
        <div className={style.sideBar}>

            {buttons.map((button, index) => {
                const isToggled = button.id === toggledButtonId;
                const isActiveItem = isToggled ? style.activeItem + ' ' + style.item : style.item
                return (
                    <NavLink to={button.link}>
                        <div
                            key={button.id}
                            onClick={() => onActiveHandle(button)}
                            className={isActiveItem}>
                            <NavLink to={button.link}>
                                <img src={button.src} alt=""/>
                            </NavLink>
                        </div>
                    </NavLink>
                )
            })}

        </div>
    );
};

export default SideBar;