import React from "react";
import {HashRouter, Redirect, Route, } from "react-router-dom";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import style from './App.module.css'
import SideBar from "../SideBar/SideBar";
import Skills from "../About/Skills";
import Project from "../Projects/Project";
import "react-tiger-transition/styles/main.min.css";
//@ts-ignore
import {Navigation} from 'react-tiger-transition';


const App = () => {

    return (
        <div className={style.app}>
            <HashRouter>
                    <SideBar/>
                    <Route path='/home' render={() => <Home/>}/>

                    <div className={style.container}>
                        <Route exact path={"/portfolio"} render={() => <Redirect to="/home"/>}/>
                        <Route path='/about' render={() => <Skills/>}/>
                        <Route path='/projects' render={() => <Project/>}/>
                        <Route path='/contacts' render={() => <Contacts/>}/>
                    </div>
            </HashRouter>
        </div>


    )
        ;
};

export default App;