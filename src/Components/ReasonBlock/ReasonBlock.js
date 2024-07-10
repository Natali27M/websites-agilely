import React, {useState} from 'react';
import css from './ReasonBlock.module.css';
import minimize from '../../images/reason/minimize.svg';
import save from '../../images/reason/save.svg';
import reduce from '../../images/reason/reduce.svg';
import professional from '../../images/reason/professional.svg';
import ReactSimplyCarousel from 'react-simply-carousel';

const ReasonBlock = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div id="reason" className={css.reason__container}>
            <div className={css.reason__content}>
                <div className={css.reason__title}>
                    Reason for Choosing Us
                </div>
                <div className={css.reason__subtitle}>
                    Explore the wide range of outstaffing opportunities and improve your business with AGILELY.
                </div>
                <div className={css.reasons__wrap}>
                    <div className={css.reason__block}>
                        <div className={css.reason__block_img_wrap}>
                            <img className={css.reason__block_img} src={minimize} alt="minimize"/>
                        </div>
                        <div className={css.reason__block_title}>
                            Minimize Liability
                        </div>
                        <div className={css.reason__block_text}>
                            AGILELY takes over the resolution of all labor disputes and communication with hired
                            employees.
                        </div>
                    </div>
                    <div className={css.reason__block}>
                        <div className={css.reason__block_img_wrap}>
                            <img className={css.reason__block_img} src={save}
                                 alt="save"/>
                        </div>
                        <div className={css.reason__block_title}>
                            Save Your Time
                        </div>
                        <div className={css.reason__block_text}>
                            We fully handle financial, law and management issues with our staff.
                        </div>
                    </div>
                    <div className={css.reason__block}>
                        <div className={css.reason__block_img_wrap}>
                            <img className={css.reason__block_img} src={reduce} alt="reduce"/>
                        </div>
                        <div className={css.reason__block_title}>
                            Reduce Your Expenses
                        </div>
                        <div className={css.reason__block_text}>
                            The remote workforce model model will allow you to reduce your office space costs.
                        </div>
                    </div>
                    <div className={css.reason__block}>
                        <div className={css.reason__block_img_wrap}>
                            <img className={css.reason__block_img} src={professional} alt="professional"/>
                        </div>
                        <div className={css.reason__block_title}>
                            Work with Professionals
                        </div>
                        <div className={css.reason__block_text}>
                            Our candidates are highly qualified and undergo rigorous internal testing.
                        </div>
                    </div>
                </div>
                <div className={css.reason__carousel}>
                    <ReactSimplyCarousel
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToShow={1}
                        autoplay={true}
                        autoplayDelay={5000}
                        itemsToScroll={1}
                        containerProps={{
                            style: {
                                width: '100%',
                                justifyContent: 'center',
                                columnGap: '10px',
                                userSelect: 'text',
                            }
                        }}
                        forwardBtnProps={{
                            style: {
                                display: 'none'
                            }
                        }}
                        backwardBtnProps={{
                            style: {
                                display: 'none'
                            }
                        }}
                        speed={500}
                        easing="linear"
                    >
                        <div className={css.slider__wrap}>
                            <div className={css.reason__block}>
                                <div className={css.reason__block_img_wrap}>
                                    <img className={css.reason__block_img} src={minimize} alt="minimize"/>
                                </div>
                                <div className={css.reason__block_title}>
                                    Minimize Liability
                                </div>
                                <div className={css.reason__block_text}>
                                    AGILELY takes over the resolution of all labor disputes and communication with hired
                                    employees.
                                </div>
                            </div>
                        </div>
                        <div className={css.slider__wrap}>
                            <div className={css.reason__block}>
                                <div className={css.reason__block_img_wrap}>
                                    <img className={css.reason__block_img} src={save}
                                         alt="save"/>
                                </div>
                                <div className={css.reason__block_title}>
                                    Save Your Time
                                </div>
                                <div className={css.reason__block_text}>
                                    We fully handle financial, law and management issues with our staff.
                                </div>
                            </div>
                        </div>
                        <div className={css.slider__wrap}>
                            <div className={css.reason__block}>
                                <div className={css.reason__block_img_wrap}>
                                    <img className={css.reason__block_img} src={reduce} alt="reduce"/>
                                </div>
                                <div className={css.reason__block_title}>
                                    Reduce Your Expenses
                                </div>
                                <div className={css.reason__block_text}>
                                    The remote workforce model model will allow you to reduce your office space costs.
                                </div>
                            </div>
                        </div>
                        <div className={css.slider__wrap}>
                            <div className={css.reason__block}>
                                <div className={css.reason__block_img_wrap}>
                                    <img className={css.reason__block_img} src={professional} alt="professional"/>
                                </div>
                                <div className={css.reason__block_title}>
                                    Work with Professionals
                                </div>
                                <div className={css.reason__block_text}>
                                    Our candidates are highly qualified and undergo rigorous internal testing.
                                </div>
                            </div>
                        </div>
                    </ReactSimplyCarousel>
                </div>
            </div>
        </div>
    );
};

export {ReasonBlock};