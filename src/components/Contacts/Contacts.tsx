import React from 'react';
import style from "./Contacts.module.scss";
import mail from '../../assets/icons/mail.png'
import phone from '../../assets/icons/phone.png'
import facebook from '../../assets/icons/facebook.png'
import vk from '../../assets/icons/vk.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import Title from "../../common/components/Title/Title";
import Button from "../../common/components/Button/Button";
import Input from "../../common/components/Input/Input";

const Contacts = () => {
    return (
        <div className={style.container}>
            <Title title={'contacts'}/>
            <div className={style.contacts}>
                <div className={style.block1}>
                    <div className={style.titleBlock}>Don`t be shy</div>
                    <div className={style.descriptionBlock}>Feel free to get in touch with me. I am always open to
                        discussing new projects, creative ideas or opportunities to be part of your visions.
                    </div>
                    <div>
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
                        <Input placeholder={'Your name'} type={'text'}/>
                        <Input placeholder={'Your email'} type={'text'}/>
                        <Input placeholder={'Subject'} type={'text'}/>

                    </div>
                    <div className={style.textArea}>
                        <textarea className={style.textArea} placeholder={'Your message'}>
                        </textarea>
                        <Button title={'Send message'}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contacts;