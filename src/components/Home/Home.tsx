import React from 'react';
import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.colorBlock}/>
            {/*yellow block*/}

            <div className={style.columns}>
                <div className={style.col1}>
                    <div className={style.photo}/>
                </div>
                <div className={style.col2}>
                    <div className={style.greetingBlock}>
                        <div className={style.hi}>Hi there!</div>
                        <div className={style.me}>
                            I`M <span className={style.colored}>ALEKSANDR KALINSKIY</span>
                        </div>
                        <div className={style.description}>I am Ukrainian front-end and React developer focused on clean
                            and
                            qualitative code.
                            I am passionate about building excellent software.
                        </div>
                        <div>
                            <a className={style.downloadLink} href='../../../public/1.txt' download>
                            <button className={style.downloadButton}>
                                    download cv
                            </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;