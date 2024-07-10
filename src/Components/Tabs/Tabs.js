import React, {useState} from 'react';
import css from './Tabs.module.css';
import rootCss from '../../root.module.css';
import reasonCss from '../ReasonBlock/ReasonBlock.module.css';

const Tabs = () => {
    const [content, setContent] = useState('recruiting');

    const contentSetter = (type) => {
        content !== type && setContent(type);
    };

    return (
        <div id="solutions" className={`${css.tabs} ${rootCss.container__1200}`}>
            <div className={css.tabs__content}>
                <div className={reasonCss.reason__title}>
                    Solutions we provide
                </div>
                <div className={css.buttons__wrap}>
                    <div
                        onClick={() => contentSetter('recruiting')}
                        className={content === 'recruiting' ? css.tab__btn_active : css.tab__btn}>
                        recruiting
                    </div>
                    <div
                        onClick={() => contentSetter('outsourcing')}
                        className={content === 'outsourcing' ? css.tab__btn_active : css.tab__btn}>
                        outsourcing
                    </div>
                    {/*
                    <div
                        onClick={() => contentSetter('outstaffing')}
                        className={content === 'outstaffing' ? css.tab__btn_active : css.tab__btn}>
                        outstaffing
                    </div>*/}
                    <div
                        onClick={() => contentSetter('consulting')}
                        className={content === 'consulting' ? css.tab__btn_active : css.tab__btn}>
                        consulting
                    </div>
                </div>
                {content === 'recruiting' ?
                    <div
                        className={`${css.tabs__payload} ${css.recruiting}`}>
                        <div className={css.tabs__payload_content}>
                            <div className={css.tabs__payload_title}>
                                recruiting
                            </div>
                            <div className={css.tabs__payload_text}>
                                We offer on-demand recruiting solutions tailored to our client's specific needs. Agilely
                                provides a wide range of services, including job postings,
                                sourcing, screening, interviewing and providing a shortlist of qualified candidates.
                                Our agile approach to recruitment allows us to quickly adapt to changing market
                                demands, giving our clients the flexibility to hire the best-fit candidates for the
                                role. Agilely also offers a long-term talent pipeline for future job opportunities,
                                prepping candidates before interviews, and managing a portfolio of clients to ensure
                                good relationships.
                            </div>
                        </div>
                    </div>
                    :
                    content === 'outsourcing' ?
                        <div className={`${css.tabs__payload} ${css.outsourcing}`}>
                            <div className={css.tabs__payload_content}>
                                <div className={css.tabs__payload_title}>
                                    outsourcing
                                </div>
                                <div className={css.tabs__payload_text}>
                                    Agilely is an outsourcing company that specializes in agile outsourcing services.
                                    We provide custom Agile teams for high-stakes development projects that can be
                                    tailored to the specific needs of our clients. Agilely's services include job
                                    postings, sourcing, screening, interviewing, and providing a shortlist of qualified
                                    candidates. With our agile approach to outsourcing, we are able to provide fast
                                    response and turnaround times, comprehensive training and on-boarding for new
                                    starters, and network of qualified flexible workforce from Fortune 500 companies.
                                </div>
                            </div>
                        </div>
                        /*: content === 'outstaffing' ?
                            <div className={`${css.tabs__payload} ${css.outstaffing}`}>
                                <div className={css.tabs__payload_content}>
                                    <div className={css.tabs__payload_title}>
                                        outstaffing
                                    </div>
                                    <div className={css.tabs__payload_text}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
                                        consequuntur
                                        corporis delectus eos est excepturi in incidunt molestiae, nostrum nulla odit
                                        officia,
                                        recusandae similique voluptate! A, beatae consequuntur dolore facilis fugit illo
                                        quas
                                        ratione voluptatum? Laborum nulla obcaecati officia.
                                    </div>
                                </div>
                            </div>*/
                            :
                            <div className={`${css.tabs__payload} ${css.consulting}`}>
                                <div className={css.tabs__payload_content}>
                                    <div className={css.tabs__payload_title}>
                                        consulting
                                    </div>
                                    <div className={css.tabs__payload_text}>
                                        Agilely is an IT consulting company that specializes in agile IT consulting
                                        services. We offer a wide range of services, including IT strategy, software and
                                        hardware development, project management, and system engineering. Agilely's agile
                                        approach to IT consulting focuses on delivering fast, efficient, and cost-effective
                                        solutions that meet their clients' business goals. We use the latest technologies,
                                        such as machine learning, artificial intelligence, and virtual reality, to ensure
                                        that our clients stay ahead of the competition.
                                    </div>
                                </div>
                            </div>
                }

            </div>
        </div>
    );
};

export {Tabs};