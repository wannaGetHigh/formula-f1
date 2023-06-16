import React from 'react';

import TechTuesdayImg from 'assets/images/feature/pit-stop.jpg';
import RussellImg from 'assets/images/feature/russell-leclerc-spain-2023.png';
import CanadianGpImg from 'assets/images/feature/F1N CANADIAN GP.png';
import Canada2011Img from 'assets/images/feature/canada-2011-feature-header.png';
import CardItem from 'components/shared/CardItem';

const newsList = [
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

const MoreNews = () => {
    return (
        <section className="my-5">
            <div className="container mx-auto">
                <h2 className="text-[25px] f1-bold hover:text-red-main mb-5 px-2.5">
                    <a href="#">
                        More news
                        <i className="icon icon-chevron-right text-red-main ml-1" />
                    </a>
                </h2>

                <div className="mb-5 border-b-[10px] border-black mx-2.5" />
            </div>
            <div className="tags-pattern">
                <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4">
                    {newsList.map((news, i) => (
                        <CardItem
                            key={i}
                            {...news}
                            theme="black"
                            border={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MoreNews;
