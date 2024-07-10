import React, {useState} from 'react';

import css from './Footer.module.css';
import rootCss from '../../root.module.css';

import emailjs from 'emailjs-com';

const Footer = () => {

    const [isEmailSent, setIsEmailSent] = useState(false);

    const notify = () => {
        setIsEmailSent(true);
        setInterval(() => {
            setIsEmailSent(false);
        }, 2000);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_stlxt8s', 'template_vskhc8d', e.target, 'RpjzL3eYwLIdMI1Ne')
            .then((result) => {
                e.target.reset();
                notify();
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div id="footer" className={`${css.footer} ${rootCss.container__1200}`}>
            <div className={css.footer__inner}>
                <div className={css.footer__top}>
                    <div className={css.footer__block}>
                        <div className={css.footer__block_title}>
                            About company
                        </div>
                        <div className={css.about__company_text}>
                            We provide a wide range of services, including IT strategy, software, and hardware
                            development, project management, and system engineering.
                        </div>
                    </div>
                    <div className={css.footer__block}>
                        <div className={css.footer__block_title}>
                            Useful links
                        </div>
                        <div className={css.footer__links_wrap}>
                            <a href="#reason" className={css.footer__link}>
                                REASON FOR CHOOSING US
                            </a>
                            <a href="#about" className={css.footer__link}>
                                ABOUT OUR COMPANY
                            </a>
                            <a href="#solutions" className={css.footer__link}>
                                Solutions we provide
                            </a>
                            <a href="#feedback" className={css.footer__link}>
                                Our clients say
                            </a>
                        </div>
                    </div>
                    <div className={`${css.footer__block} ${css.footer__block_form}`}>
                        <div className={css.footer__block_title}>
                            {isEmailSent ? 'Email sent!' : 'Ask callback'}
                        </div>
                        <form onSubmit={sendEmail} className={css.callback__form}>
                            <input name="name" type="text" className={css.callback__input}
                                   placeholder="Name"/>
                            <input name="email" type="text" className={css.callback__input}
                                   placeholder="Email"/>
                            <input name="number" type="text" className={css.callback__input}
                                   placeholder="Phone"/>
                            <button className={css.callback__btn}>SEND</button>
                        </form>
                    </div>

                </div>
                <div className={css.footer__bottom}>
                    <div className={css.footer__logo}>
                        Agilely
                    </div>
                    <div className={css.footer__bottom_border}></div>
                    <div className={css.copyright}>
                        <div>Copyrights @ 2022</div>
                        <div>AGILELY, all rights reserved</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Footer};