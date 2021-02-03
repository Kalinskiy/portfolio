import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import style from './App.module.css'
import SideBar from "../SideBar/SideBar";
import Skills from "../About/Skills";
import Project from "../Projects/Project";


const App = () => {
    return (
        <div className={style.app}>
            <BrowserRouter>

                <SideBar/>
                <Route path='/home' render={() => <Home/>}/>

                <div className={style.container}>
                    <Route exact path={"/portfolio"} render={() => <Redirect to="/home"/>}/>
                    <Route path='/about' render={() => <Skills/>}/>
                    <Route path='/projects' render={() => <Project/>}/>
                    <Route path='/contacts' render={() => <Contacts/>}/>
                </div>

            </BrowserRouter>
        </div>


    )
        ;
};

export default App;