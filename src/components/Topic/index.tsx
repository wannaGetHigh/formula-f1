import React from 'react';

import NetZeroCarImg from 'assets/images/topics/NetZero_Car_i4_i3_0004.jpg';
import CalendarImg from 'assets/images/topics/calendar.png';
import MaskImg from 'assets/images/topics/mask.png';
import StadiumImg from 'assets/images/topics/stadium.png';

const topicList = [
    {
        title: 'Sustainability',
        background: NetZeroCarImg,
        href: '#',
    },
    {
        title: 'Race calendar',
        background: CalendarImg,
        href: '#',
    },
    {
        title: 'Podcasts',
        background: MaskImg,
        href: '#',
    },
    {
        title: 'Esports',
        background: StadiumImg,
        href: '#',
    },
];

const Topic = () => {
    return (
        <section className="bg-[#38383f] py-10">
            <div className="container mx-auto">
                <div className="relative flex flex-col pt-2.5 -mb-2.5 lg:flex-row border-t-[10px] border-r-[10px] border-black-carbon rounded-tr-2xl">
                    <h5 className="absolute -top-5 left-0 f1-bold text-xl bg-[#38383f] text-white pl-2 pr-5">
                        Explore F1 topics
                    </h5>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 pr-2.5 -mb-2.5">
                        {topicList.map((topic) => (
                            <a
                                href={topic.href}
                                className="m-2.5 rounded-tr-2xl rounded-tl-2xl overflow-hidden"
                            >
                                <div className="topic-card relative">
                                    <img
                                        src={topic.background}
                                        alt={topic.title}
                                    />
                                    <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white f1-bold text-xl">
                                        {topic.title}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topic;
