import React from 'react';

import SubTitle from 'components/shared/SubTitle';
import Button from 'components/shared/Button';

import TrailerImg from 'assets/images/image.jpg';
import DriverImg from 'assets/images/feature/drivers.jpg';
import PitStopImg from 'assets/images/feature/pit-stop.jpg';
import TechTuesdayImg from 'assets/images/feature/pit-stop.jpg';
import RussellImg from 'assets/images/feature/russell-leclerc-spain-2023.png';
import CanadianGpImg from 'assets/images/feature/F1N CANADIAN GP.png';
import Canada2011Img from 'assets/images/feature/canada-2011-feature-header.png';

const featureNews = [
    {
        type: 'VIDEO',
        src: DriverImg,
        desc: 'WATCH: Laughs and questions aplenty as F1 drivers find out their F1 23 game ratings',
        icon: 'icon-play',
    },
    {
        type: 'NEWS',
        src: PitStopImg,
        desc: 'Haas Team Principal Steiner reveals ‘fantastic’ gains team have made in key area ',
    },
    {
        type: 'TECHNICAL',
        src: TechTuesdayImg,
        desc: 'TECH TUESDAY: The secrets behind Red Bull’s floor design and how it differs to rival teams’',
    },
    {
        type: 'NEWS',
        src: RussellImg,
        desc: 'Mercedes predict where they’ll sit in the F1 pecking order in Canada after Spanish GP gains',
    },
    {
        type: 'PODCAST',
        src: CanadianGpImg,
        desc: 'F1 NATION: Mercedes on the move, Aston’s upgrades and 50 years of the Safety Car – it’s our Canadian GP preview',
        icon: 'icon-audio',
    },
    {
        type: 'VIDEO',
        src: Canada2011Img,
        desc: 'CANADA 2011: Torrential rain, a Safety Car record and Button’s charge – the longest F1 race remembered by those involved',
    },
];

const Feature = () => {
    return (
        <section className='relative flex flex-col lg:flex-row z-10'>
            <div className="flex-1 flex flex-col px-2.5">
                <div className="lg:sticky top-20 border-t-[10px] border-r-[10px] rounded-tr-2xl border-red-main bg-white">
                    <a href="#" className="feature-link mb-4 rounded-tr-xl">
                        <div className="mr-2.5">
                            <div className="py-2.5">
                                <SubTitle title="FEATURE" isUnlock />
                                <p className="f1-bold text-[22px] leading-6 mb-2.5">
                                    EXCLUSIVE: Inside the making of Drive to
                                    Survive, its impact on F1 and what the
                                    future holds
                                </p>
                            </div>
                            <picture>
                                <img
                                    className="w-full"
                                    loading="lazy"
                                    src={TrailerImg}
                                    alt="Drive to Survive season five: final trailer"
                                />
                            </picture>
                        </div>
                    </a>
                </div>
                <div className="h-5 border-r-[10px] border-red-main" />
                <div className='lg:hidden h-5 homepage--hero border-r-[10px] border-red-main' />
                <div className='hidden lg:block flex-1 homepage--hero border-r-[10px] border-red-main' />
            </div>

            <div className='flex-1 px-2.5'>
                <div className="grid grid-cols-2">
                    {featureNews.map((news, i) => (
                        <a key={i} href="#" className="sub-feature-link flex flex-col px-2.5 pb-4">
                            <div className="relative overflow-hidden">
                                <picture className="block relative transition-transform delay-300">
                                    <img
                                        className="w-full"
                                        loading="lazy"
                                        src={news.src}
                                        alt="Drivers guess their F1® 23 Game Ratings"
                                    />
                                </picture>
                                {news.icon && (
                                    <div className="absolute bottom-0 left-0 p-2.5 rounded-tr-2xl bg-white h-[38px]">
                                        <i
                                            className={`icon text-red-main text-lg leading-1 ${news.icon}`}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 relative z-10 p-[15px] pb-[35px] leading-[18px] bg-white border-b border-r rounded-br-2xl border-gray-300">
                                <SubTitle title={news.type} className="mb-[5px]" />
                                <p>{news.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <Button />
            </div>
        </section>
    );
};

export default Feature;
