import React from 'react';
import css from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div id="about" className={css.about__us_block}>
            <div className={css.about__us_bg}></div>
            <div className={css.about__us_content}>
                <div className={css.about__us_title}>
                    ABOUT OUR COMPANY
                </div>
                <div className={css.about__us_subtitle}>
                    Professional & Cost Efficient Outstaffing Service
                </div>
                <div className={css.about__us_text}>
                    Agilely is a professional and experienced team that provides recruitment, outsourcing, and
                    consulting services. With our solutions, we help companies around the world improve their business.
                    Agilely will help you expand your team with new, highly qualified personnel. Our remote workforce
                    model can help you reduce costs, minimize liability, maximize profits, and focus on more critical
                    issues.
                </div>
            </div>
        </div>
    );
};

export {AboutUs};