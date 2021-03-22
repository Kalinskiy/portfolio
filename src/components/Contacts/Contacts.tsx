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
import {useFormik} from "formik";

const Contacts = () => {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

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
                    <form onSubmit={formik.handleSubmit}>
                        <div className={style.inputs}>
                            <input type={'text'} placeholder={'Name'}  {...formik.getFieldProps('name')}/>
                            <input type={'text'} placeholder={'your email'}  {...formik.getFieldProps('email')}/>
                            <input type={'text'} placeholder={'Subject'}  {...formik.getFieldProps('subject')}/>
                        </div>
                        <div className={style.textArea}>
                        <textarea className={style.textArea}
                                  placeholder={'Your message'} {...formik.getFieldProps('message')}>
                        </textarea>
                            <Button title={'Send message'}/>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contacts;