import React from 'react';
import style from './Skills.module.scss'
import Title from "../../common/components/Title/Title";

const Skills = () => {
    type skillType = {
        name: string,
        width: string
    }
    const skillWith: Array<skillType> = [
        {name: 'HTML/CSS', width: '95%',},
        {name: 'Web design', width: '75%',},
        {name: 'React JS', width: '85%',},
        {name: 'JavaScript', width: '80%',},
        {name: 'TypeScript', width: '85%',},
        {name: 'Redux', width: '70%',},
    ]
    type workingStackType = {
        title: string
    }
    const workingStack: Array<workingStackType> = [
        {title: 'HTML'},
        {title: 'Javascript'},
        {title: 'CSS'},
        {title: 'SCSS/SASS'},
        {title: 'REACT'},
        {title: 'Material UI'},
        {title: 'Yarn/Npm'},
        {title: 'React-Router-Dom'},
        {title: 'Redux'},
        {title: 'Styled-components'},

    ]
    return (


        <div>

            <Title title={'skills'}/>
            <div className={style.skills}>
                {skillWith.map(({name, width}) => {
                    return <div className={style.skillContainer}>
                        <div className={style.skillInfo} style={{width: width}}>
                            <div>{name}</div>
                            <div>{width}</div>
                        </div>
                        <div className={style.skillLine}>
                            <div className={style.first} style={{width: width}}/>
                            <div className={style.second}/>
                        </div>
                    </div>
                })}
            </div>
            <h3 className={style.title}>The <span>stack</span> I am working with</h3>
            <div className={style.stack}>

                {workingStack.map(({title}) => {
                    return <span className={style.stackItem}>
                            {title}
                        </span>
                })}

            </div>
        </div>


    );
};

export default Skills;