import React from 'react';
import style from "../Contacts/Contacts.module.css";
import mail from '../../assets/icons/mail.png'
import phone from '../../assets/icons/phone.png'
import facebook from '../../assets/icons/facebook.png'
import vk from '../../assets/icons/vk.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'

const Contacts = () => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>My <span>contacts</span></h2>
            <div className={style.contacts}>
                <div className={style.block1}>
                    <div className={style.titleBlock}>Don`t be shy</div>
                    <div className={style.descriptionBlock}>Feel free to get in touch with me. I am always open to
                        discussing new projects, creative ideas or opportunities to be part of your visions.
                    </div>
                    <div style={{width: '80%'}}>
                        <div className={style.contactItem}>
                            <img src={mail} alt=""/>
                            <span>sasha.kalinskiy@yandex.ru</span>

                        </div>
                        <div className={style.contactItem}>
                            <img src={phone} alt=""/>
                            <span>  +38 050 810 80 19</span>

                        </div>
                        <div className={style.links}>
                            <div className={style.linkItem}>
                                <img src={facebook} alt=""/>
                            </div>
                            <div className={style.linkItem}>
                                <img src={vk} alt=""/>
                            </div>
                            <div className={style.linkItem}>
                                <img src={linkedin} alt=""/>
                            </div>
                            <div className={style.linkItem}>
                                <img src={github} alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={style.block2}>
                    <div className={style.inputs}>
                        <div className={style.inputItem}><input placeholder={'Your name'} type="text"/></div>
                        <div className={style.inputItem}><input placeholder={'Your Email'} type="text"/></div>
                        <div className={style.inputItem}><input placeholder={'Subject'} type="text"/></div>
                    </div>
                    <div className={style.textArea}>
                        <textarea placeholder={'Your message'}>

                        </textarea>
                        <button className={style.downloadButton}>download cv</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;