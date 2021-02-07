import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './SideBar.module.scss'
import home from '../../assets/icons/home.png'
import about from '../../assets/icons/about.png'
import portfolio from '../../assets/icons/portfolio.png'
import contacts from '../../assets/icons/contacts.png'


const SideBar = (props: any) => {
    const preloadFunc = () => {
        props.setPreloader(true)
        setTimeout(() => {
            props.setPreloader(false)
        }, 0)
    }


    const [toggledButtonId, setToggledButtonId] = useState(null);
    const onActiveHandle = (button: any) => {
        preloadFunc()
        setToggledButtonId(button.id);
    }
    type ButtonType = {
        id: number
        title: string
        link: string
        src: any

    }
    const buttons: Array<ButtonType> = [
        {id: 1, title: 'Home', link: '/home', src: home},
        {id: 2, title: 'Skills', link: '/skills', src: about},
        {id: 3, title: 'Projects', link: '/projects', src: portfolio},
        {id: 4, title: 'Contacts', link: '/contacts', src: contacts},
    ]

    return (
        <div className={style.sideBar}>

            {buttons.map((button, index) => {
                const isToggled = button.id === toggledButtonId;
                const isActiveItem = isToggled ? style.activeItem + ' ' + style.item : style.item
                return (
                    <NavLink style={{textDecoration: 'none'}} to={button.link}>
                        <div
                            key={button.id}
                            onClick={() => onActiveHandle(button)}
                            className={isActiveItem}>
                            <h2 className={style.buttonTitle}>{button.title}</h2>
                            <img src={button.src} alt=""/>
                        </div>
                    </NavLink>


                )
            })}

        </div>
    );
};

export default SideBar;