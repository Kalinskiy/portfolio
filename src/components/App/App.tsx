import React from "react";
import {HashRouter, Redirect, Route, useLocation,} from "react-router-dom";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import style from './App.module.css'
import SideBar from "../SideBar/SideBar";
import Skills from "../About/Skills";
import Project from "../Projects/Project";
import "react-tiger-transition/styles/main.min.css";
//@ts-ignore
import {Navigation} from 'react-tiger-transition';
import {CSSTransition, TransitionGroup} from "react-transition-group";


const App = () => {
    const location = useLocation()
    console.log(location)

    return (
        <TransitionGroup className="RTG">
            <CSSTransition key={location.pathname} timeout={600} classNames="fade">
                <div className={style.app}>

                    <SideBar/>
                    <Route path='/home' render={() => <Home/>}/>

                    <div className={style.container}>
                        <Route exact path={"/portfolio"} render={() => <Redirect to="/home"/>}/>
                        <Route path='/about' render={() => <Skills/>}/>
                        <Route path='/projects' render={() => <Project/>}/>
                        <Route path='/contacts' render={() => <Contacts/>}/>
                    </div>


                </div>
            </CSSTransition>
        </TransitionGroup>

    )
        ;
};

export default App;