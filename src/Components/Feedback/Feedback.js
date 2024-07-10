import React, {useState} from 'react';

import css from './Feedback.module.css';

import serhii from '../../images/feedback/serhii.jpg';
import daniel from '../../images/feedback/daniel.jpg';
import andrii from '../../images/feedback/andrii.jpg';
import ReactSimplyCarousel from 'react-simply-carousel';

const Feedback = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    return (
        <div id="feedback" className={css.feedback__wrap}>
            <div className={css.feedback__blocks_wrap}>
                <div className={css.feedback__block}>
                    <div className={css.photo__wrap}>
                        <img className={css.feedback__img} src={serhii} alt="serhii"/>
                    </div>
                    <div className={css.feedback__text}>
                        Working with Agilely was a great pleasure. They helped us find a handful of people passionate
                        about
                        creating compelling software solutions and interested in learning. Communication was at the
                        highest
                        level, all issues were resolved clearly and promptly. The assembled team is working hard to
                        develop
                        reliable solutions on our project.
                    </div>
                    <div className={css.feedback__bottom}>
                        <div className={css.feedback__name}>
                            Serhii Nykytiuk
                        </div>
                        <div className={css.feedback__position}>ceo</div>
                    </div>
                </div>
                <div className={css.feedback__block}>
                    <div className={css.photo__wrap}>
                        <img className={css.feedback__img} src={daniel} alt="daniel"/>
                    </div>
                    <div className={css.feedback__text}>
                        Agilely consultants have a deep understanding of agile processes and technical acumen. They
                        helped
                        us form two widely distributed cross-functional teams. Quarterly planning and execution of tasks
                        was
                        carried out, all deadlines were met, risks were reported earlier.
                    </div>
                    <div className={css.feedback__bottom}>
                        <div className={css.feedback__name}>
                            Daniel Williams
                        </div>
                        <div className={css.feedback__position}>vp</div>
                    </div>
                </div>
                <div className={css.feedback__block}>
                    <div className={css.photo__wrap}>
                        <img className={css.feedback__img} src={andrii} alt="andrii"/>
                    </div>
                    <div className={css.feedback__text}>
                        Agilely helped me with recruiting many times. With their help, I have selected several capable
                        managers who have helped me with a number of high-profile projects. The team approached the
                        execution of the work responsibly and at the highest level. I enjoyed working with Agilely!
                    </div>
                    <div className={css.feedback__bottom}>
                        <div className={css.feedback__name}>
                            Andrii Bondarenko
                        </div>
                        <div className={css.feedback__position}>ceo</div>
                    </div>
                </div>
            </div>
            <div className={css.carousel__wrap}>
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
                    <div className={css.carousel__gap_block}>
                        <div className={css.feedback__block}>
                            <div className={css.photo__wrap}>
                                <img className={css.feedback__img} src={serhii} alt="serhii"/>
                            </div>
                            <div className={css.feedback__text}>
                                Working with Agilely was a great pleasure. They helped us find a handful of people
                                passionate
                                about
                                creating compelling software solutions and interested in learning. Communication was at
                                the
                                highest
                                level, all issues were resolved clearly and promptly. The assembled team is working hard
                                to
                                develop
                                reliable solutions on our project.
                            </div>
                            <div className={css.feedback__bottom}>
                                <div className={css.feedback__name}>
                                    Serhii Nykytiuk
                                </div>
                                <div className={css.feedback__position}>ceo</div>
                            </div>
                        </div>
                    </div>
                    <div className={css.carousel__gap_block}>
                        <div className={css.feedback__block}>
                            <div className={css.photo__wrap}>
                                <img className={css.feedback__img} src={daniel} alt="daniel"/>
                            </div>
                            <div className={css.feedback__text}>
                                Agilely consultants have a deep understanding of agile processes and technical acumen.
                                They
                                helped
                                us form two widely distributed cross-functional teams. Quarterly planning and execution
                                of tasks
                                was
                                carried out, all deadlines were met, risks were reported earlier.
                            </div>
                            <div className={css.feedback__bottom}>
                                <div className={css.feedback__name}>
                                    Daniel Williams
                                </div>
                                <div className={css.feedback__position}>vp</div>
                            </div>
                        </div>
                    </div>
                    <div className={css.carousel__gap_block}>
                        <div className={css.feedback__block}>
                            <div className={css.photo__wrap}>
                                <img className={css.feedback__img} src={andrii} alt="andrii"/>
                            </div>
                            <div className={css.feedback__text}>
                                Agilely helped me with recruiting many times. With their help, I have selected several
                                capable
                                managers who have helped me with a number of high-profile projects. The team approached
                                the
                                execution of the work responsibly and at the highest level. I enjoyed working with
                                Agilely!
                            </div>
                            <div className={css.feedback__bottom}>
                                <div className={css.feedback__name}>
                                    Andrii Bondarenko
                                </div>
                                <div className={css.feedback__position}>ceo</div>
                            </div>
                        </div>
                    </div>
                </ReactSimplyCarousel>
            </div>

        </div>
    );
};

export {Feedback};