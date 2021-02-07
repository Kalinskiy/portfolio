import React from 'react';
import style from './Project.module.scss'
import social from '../../assets/social.png'
import todo from '../../assets/todo.png'
import cards from '../../assets/cards.jpg'
import cinema from '../../assets/cinema.jpg'
import pizza from '../../assets/pizza.png'
import books from '../../assets/books.jpg'
import Title from "../../common/components/Title/Title";



const Project = () => {
    type ItemType = {
        id: number,
        title: string,
        image: any
        link: string
    }
    const projectItem: Array<ItemType> = [
        {
            id: 1,
            title: 'Social-Network',
            image: social,
            link: 'https://kalinskiy.github.io/social-network'
        },
        {id: 1, title: 'Todo list', image: todo, link: 'https://kalinskiy.github.io/todo/'},
        {id: 1, title: 'Learning Cards', image: cards, link: 'https://kalinskiy.github.io/cards'},
        {id: 1, title: 'Online movies', image: cinema, link: 'https://moviereactsearcher.web.app'},
        {id: 1, title: 'Pizza', image: pizza, link: 'https://kalinskiy.github.io/pizza/'},
        {id: 1, title: 'Book store', image: books, link: 'https://kalinskiy.github.io/book-shop/'},
    ]
    // const divStyle = {
    //     backgroundImage: 'url(' + social + ')',
    //
    // }
    return (
        <div>

            <Title title={'projects'}/>
            <div className={style.projects}>

                {projectItem.map((item) => {
                    return <a target='_blank' href={`${item.link}`}>
                        <div className={style.projectItem} style={{backgroundImage: 'url(' + item.image + ')'}}>
                            <span className={style.projectTitle}>{item.title}</span>

                        </div>
                    </a>
                })}


            </div>
        </div>
    );
};

export default Project;