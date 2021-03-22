import React from 'react';
import {NavLink} from "react-router-dom";
import style from './SideBarMobile.module.scss'

type PropsType = {

    open: boolean
    setOpen: (open: boolean) => void
}

const SideBarMobile = ({open, setOpen}: PropsType) => {



    const toggleMenuHandler = () => {
        setOpen(!open)
    }

    return (
        <div className={style.sidebarMobile}>
            <a className={open ? `${style.hamburgerMenu} ${style.flex} ${style.active}` : `${style.hamburgerMenu} ${style.flex}`}
               onClick={toggleMenuHandler}
            >
                <span></span>
                <span></span>
            </a>
            <div
                className={open ? `${style.menu} ${style.flex} ${style.active}` : `${style.menu} ${style.notFlex}`}>
                <ul className={style.flex}>
                    <li onClick={() => setOpen(false)}><NavLink to="/home">Home</NavLink></li>
                    <li onClick={() => setOpen(false)}><NavLink to="/skills">Skills</NavLink></li>
                    <li onClick={() => setOpen(false)}><NavLink to="/projects">Projects</NavLink></li>
                    <li onClick={() => setOpen(false)}><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default SideBarMobile;