import React from 'react';

import SubTitle from 'components/shared/SubTitle';
import Button from 'components/shared/Button';
import CardItem from 'components/shared/CardItem';

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
        showBadge: true,
        desc: 'TECH TUESDAY: The secrets behind Red Bull’s floor design and how it differs to rival teams’',
    },
    {
        type: 'NEWS',
        src: RussellImg,
        showBadge: true,
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
        <section className='container mx-auto relative flex flex-col lg:flex-row z-10'>
            <div className="flex-1 flex flex-col px-2.5 pb-5">
                <div className="lg:sticky top-16 border-t-[10px] border-r-[10px] rounded-tr-2xl border-red-main bg-white">
                    <a href="#" className="feature-link mb-4 rounded-tr-xl">
                        <div className="mr-2.5">
                            <div className="py-2.5">
                                <SubTitle title="FEATURE" showBadge />
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

            <div className='flex-1 px-2.5 pb-2.5'>
                <div className="grid grid-cols-2">
                    {featureNews.map((news, i) => (
                        <CardItem key={i} {...news} />
                    ))}
                </div>

                <Button href='#' className='text-center lg:text-left my-2.5'>View Latest News</Button>
            </div>
        </section>
    );
};

export default Feature;
