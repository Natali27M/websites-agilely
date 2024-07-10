import React from 'react';
import {AboutUs, Feedback, FirstView, Footer, ReasonBlock, Tabs} from '../../Components';

import css from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={css.main__page}>
            <FirstView/>
            <ReasonBlock/>
            <AboutUs/>
            <Tabs/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export {MainPage};