import React from 'react';
import NavTitle from './NavTitle';

import SpanishPrixImg from 'assets/images/header/Spanish_Grand_Prix.png'
import CanadianPrixImg from 'assets/images/header/Canadian_Grand_Prix.png'
import AustrianPrixImg from 'assets/images/header/Austrian_Grand_Prix.png'
import BritishPrixImg from 'assets/images/header/British_Grand_Prix.png'

const titleList = [
    {
        name: 'Full Schedule',
        href: '#',
    },
    {
        name: 'Race Programmes',
        href: '#',
    },
];

const scheduleList = [
    {
        city: 'SPAIN',
        year: '2023',
        linkText: 'FORMULA 1 SPAIN AIRWAYS SPAIN GRAND PRIX 2023',
        image: SpanishPrixImg,
        border: true,
        time: 'PREVIOUS',
        startAndEndDate: 'October 06-08',
        href: '#',
    },
    {
        city: 'CANADA',
        year: '2023',
        linkText: 'FORMULA 1 LENOVO CANADA GRAND PRIX 2023',
        image: CanadianPrixImg,
        border: true,
        time: 'NEXT',
        startAndEndDate: 'October 20-22',
        href: '#',
    },
    {
        city: 'AUSTRIA',
        year: '2023',
        linkText: 'FORMULA 1 ROLEX GROSSER PREIS VON ÖSTERREICH 2023',
        image: AustrianPrixImg,
        border: false,
        time: 'UPCOMING',
        startAndEndDate: 'October 27-29',
        href: '#',
    },
    {
        city: 'GREAT BRITAIN',
        year: '2023',
        linkText: 'FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023',
        image: BritishPrixImg,
        border: false,
        time: '',
        startAndEndDate: 'November 03-05',
        href: '#',
    },
];

const ScheduleTab = () => {
    return (
        <div className="px-[30px] py-10">
            <NavTitle titleList={titleList} />

            <div className='grid grid-cols-4 gap-[18px] pt-4 px-2.5'>
                {scheduleList.map(item => (
                    <a href={item.href} key={item.city} className={`schedule-item relative border-t-[10px] border-r-[10px] ${item.border ? 'border-black-tuna rounded-tr-[30px]' : 'border-transparent'}`}>
                        <div className='absolute -top-4 pr-4 left-0 bg-black-carbon text-white text-sm f1-bold'>{item.time}</div>
                        <div className='pt-[18px] pr-[18px]'>
                            <div className='rounded-tl-[10px] rounded-tr-[10px] overflow-hidden'>
                                <img src={item.image} alt={item.city} className='w-full transition-transform' />
                            </div>

                            <div className='pr-5 pb-[5px] mt-3 border-r border-b rounded-br-[10px] border-black-tuna transition-colors'>
                                <p className='min-h-[50px] f1 text-xs leading-[15px] mb-[5px] text-gray-light'>
                                    {item.linkText}
                                </p>
                                <div className='flex justify-between text-13'>
                                    <span>{item.startAndEndDate}</span>
                                    <i className='icon icon-chevron-right transition-colors' />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ScheduleTab;
