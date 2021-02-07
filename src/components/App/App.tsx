import React, {useState} from "react";
import {Redirect, Route,} from "react-router-dom";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import style from './App.module.scss'
import SideBar from "../SideBar/SideBar";
import Skills from "../Skills/Skills";
import Project from "../Projects/Project";

import './preloader.css'


const App = () => {
    const [preloader, setPreloader] = useState(false)

    return (

        <div className={style.app}>

            {
                <div id="preloader" className={preloader ? 'preloader' : "preloader off"}>
                    <div className="black_wall"/>
                </div>

            }
            <SideBar setPreloader={setPreloader}/>
            <Route path='/home' render={() => <Home/>}/>

            <div className={style.container}>
                <Route exact path={"/"} render={() => <Redirect to="/home"/>}/>
                <Route path='/skills' render={() => <Skills/>}/>
                <Route path='/projects' render={() => <Project/>}/>
                <Route path='/contacts' render={() => <Contacts/>}/>
            </div>
        </div>
    )
        ;
};

export default App;