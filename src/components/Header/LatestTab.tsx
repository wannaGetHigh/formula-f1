import React from 'react';

import SubTitle from 'components/shared/SubTitle';

import PitStopImg from 'assets/images/header/PitStop.jpg';
import FormulaImg from 'assets/images/header/Formula.jpg';
import RaceCarImg from 'assets/images/header/RaceCar.jpg';

import NetZeroCarImg from 'assets/images/topics/NetZero_Car_i4_i3_0004.jpg';
import CalendarImg from 'assets/images/topics/calendar.png';
import MaskImg from 'assets/images/topics/mask.png';
import StadiumImg from 'assets/images/topics/stadium.png';
import RedCageImg from 'assets/images/topics/red-cage.png';
import HelmetImg from 'assets/images/topics/helmet.png';
import NavTitle from './NavTitle';

const topicList = [
    {
        title: 'F1 Unlocked',
        background: RedCageImg,
        href: '#',
    },
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
    {
        title: 'Driver market',
        background: HelmetImg,
        href: '#',
    },
];

const latestNews = [
    {
        desc: 'Formula 1 and Make-A-Wish to make wishes come true at Grands Prix for critically ill children',
        hef: '#',
        image: FormulaImg,
        type: 'NEWS',
        showBadge: false,
    },
    {
        desc: "PADDOCK INSIDER: All eyes are on Aston Martin's upgrade package but F1 now has four teams fighting for a podium",
        hef: '#',
        image: RaceCarImg,
        type: 'FEATURE',
        showBadge: true,
    },
    {
        desc: 'FORMULA WHY: Why F1 pit stops are so important and what makes a super-fast stop',
        hef: '#',
        image: PitStopImg,
        type: 'PODCAST',
        showBadge: false,
    },
];

const titleList = [
    {
        name: 'Latest',
        href: '#',
    },
    {
        name: 'What is F1?',
        href: '#',
    },
]

const LatestTab = () => {
    return (
        <div className="px-[30px] py-10">
            <NavTitle  titleList={titleList} />

            <div className="container mx-auto pt-[30px]">
                <div className="flex">
                    <div className="w-1/4 px-2.5">
                        <h3 className="f1-bold text-base mb-1">News</h3>
                        {latestNews.map((news, i) => (
                            <a
                                key={i}
                                href={news.hef}
                                className="flex gap-[15px] py-2.5 border-b border-black-tuna"
                            >
                                <div className="w-[35%]">
                                    <img
                                        src={news.image}
                                        className="max-w-full rounded-tr rounded-br"
                                        alt={news.desc}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex-1">
                                    <SubTitle
                                        title={news.type}
                                        showBadge={news.showBadge}
                                    />
                                    <p className="text-base leading-[18px] mt-[5px]">
                                        {news.desc}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="flex-1 px-2.5">
                        <h3 className="f1-bold text-base mb-1">Topics</h3>
                        <div className="grid grid-cols-3 gap-5">
                            {topicList.map((topic) => (
                                <a key={topic.title} href={topic.href}>
                                    <div className="relative border border-[rgba(255,255,255,.2)] hover:border-red-main rounded-xl overflow-hidden">
                                        <img
                                            src={topic.background}
                                            alt={topic.title}
                                            className='w-full h-full object-cover hover:scale-110 transition-transform duration-200'
                                        />
                                        <p className="absolute top-1/2 -translate-y-1/2 w-full text-center text-white f1 text-lg">
                                            {topic.title}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestTab;
