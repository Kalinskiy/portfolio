import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './SideBar.module.css'
import home from '../../assets/icons/home.png'
import about from '../../assets/icons/about.png'
import portfolio from '../../assets/icons/portfolio.png'
import contacts from '../../assets/icons/contacts.png'
// @ts-ignore
import {Link, glide} from 'react-tiger-transition';


const SideBar = () => {
    // glide({
    //     name: "glide-right",
    //     direction: "right"
    // });


    const [toggledButtonId, setToggledButtonId] = useState(null);
    const onActiveHandle = (button: any) => {
        setToggledButtonId(button.id);
    }
    type ButtonType = {
        id: number
        title: string
        link: string
        src: any

    }
    const buttons: Array<ButtonType> = [
        {id: 1, title: 'test', link: '/home', src: home},
        {id: 2, title: 'test', link: '/about', src: about},
        {id: 3, title: 'test', link: '/projects', src: portfolio},
        {id: 4, title: 'test', link: '/contacts', src: contacts},
    ]

    return (
        <div className={style.sideBar}>

                {buttons.map((button, index) => {
                    const isToggled = button.id === toggledButtonId;
                    const isActiveItem = isToggled ? style.activeItem + ' ' + style.item : style.item
                    return (

                       // <Link transition="glide-right" style={{textDecoration: 'none'}} to={button.link}>
                        <NavLink   style={{textDecoration: 'none'}} to={button.link}>
                            <div
                                key={button.id}
                                onClick={() => onActiveHandle(button)}
                                className={isActiveItem}>
                                <h2 className={style.buttonTitle}>{button.title}</h2>
                                <img src={button.src} alt=""/>
                            </div>
                        </NavLink>
                       // </Link>

                    )
                })}

        </div>
    );
};

export default SideBar;