import React, {useEffect, useState} from 'react';

import css from './FirstView.module.css';
import {Turn as Hamburger} from 'hamburger-react';

import ReactSimplyCarousel from 'react-simply-carousel';

import rootCss from '../../root.module.css';
import useComponentVisible from '../../RootFunctions/useComponentVisible';
import useWindowDimensions from '../../RootFunctions/WindowDimensions';


const FirstView = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);

    const [fixedHeaderActive, setFixedHeaderActive] = useState(false);

    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(true);

    const {width} = useWindowDimensions();

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    useEffect(() => {
        setBurgerOpen(false);
        if (scrollTop >= window.innerHeight - 5) {
            setFixedHeaderActive(true);
        } else {
            setFixedHeaderActive(false);
        }
    }, [scrollTop]);

    useEffect(() => {
        if (!isComponentVisible) {
            setBurgerOpen(false);
            setIsComponentVisible(true);
        }
    }, [isComponentVisible]);

    useEffect(() => {
        setBurgerOpen(false);
    }, [width]);

    return (
        <div id="first__view" className={css.first__view}>
            <header
                className={`${fixedHeaderActive ? css.fixed__header : css.fist__header} ${rootCss.container__1200}`}>
                <div className={css.header__logo}>
                    agilely
                </div>
                <div className={css.header__links}>
                    <a className={css.header__link} href="#reason">REASON FOR CHOOSING US</a>
                    <a className={css.header__link} href="#about">ABOUT OUR COMPANY</a>
                    <a className={css.header__link} href="#solutions">Solutions</a>
                    <a className={css.header__link} href="#feedback">Our clients say</a>
                    <a className={css.header__link} href="#footer">Ask callback</a>
                </div>
                <div onClick={() => setBurgerOpen(!burgerOpen)} className={css.burger__btn}>
                    <Hamburger size={22} toggled={burgerOpen}/>
                </div>
                <div ref={ref} className={burgerOpen ? css.burger__menu_active : css.burger__menu}>
                    <div className={`${css.burger__menu_wrap} ${rootCss.container__1200}` }>
                        <a className={css.header__link} href="#reason">REASON FOR CHOOSING US</a>
                        <a className={css.header__link} href="#about">ABOUT OUR COMPANY</a>
                        <a className={css.header__link} href="#solutions">Solutions</a>
                        <a className={css.header__link} href="#feedback">Our clients say</a>
                        <a className={css.header__link} href="#footer">Ask callback</a>
                    </div>
                </div>
            </header>
            <div className={`${css.main__content} ${rootCss.container__1200}`}>
                <h1 className={css.main__title}>
                    This is AGILELY
                </h1>
                <h2 className={css.main__subtitle}>
                    OUTSOURCING SOFTWARE COMPANY
                </h2>
            </div>
        </div>
    );
};

export {FirstView};