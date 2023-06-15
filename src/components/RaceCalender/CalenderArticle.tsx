import React, { useState } from 'react';

import ClockImg from 'assets/images/clock.png'
import OutlinedButton from './OutlinedButton';
import CalenderTime from './CalenderTime';
import { shortenMonth } from 'utils';

interface CalenderArticleProps {
    image: string;
    city: string;
    startAndEndDate: string;
    linkText: string;
}

const raceTypeList = [
    {
        type: 'PRACTICE 1',
        day: 'FRI',
        startTime: '18:30',
        endTime: '19:30'
    },
    {
        type: 'PRACTICE 2',
        day: 'FRI',
        startTime: '22:00',
        endTime: '23:00'
    },
    {
        type: 'PRACTICE 3',
        day: 'SAT',
        startTime: '17:30',
        endTime: '18:30'
    },
    {
        type: 'QUALIFYING',
        day: 'SAT',
        startTime: '21:00',
        endTime: '22:00'
    },
    {
        type: 'PRACTICE 1',
        day: 'FRI',
        startTime: '21:00',
    },
]

const CalenderArticle = ({
    image,
    city,
    startAndEndDate,
    linkText
}: CalenderArticleProps) => {
    const [show, setShow] = useState(false);

    const year = new Date().getFullYear()
    const [startDate, endDate] = startAndEndDate.split('-')
    const [startMonth, startDay] = startDate.split(' ')
    const isMonthDifferent = Boolean(endDate.split(' ')[1])
    const endMonth = isMonthDifferent ? endDate.split(' ')[0] : startMonth
    const endDay = isMonthDifferent ? endDate.split(' ')[1] : endDate.split(' ')[0]

    return (
        <article
            className={`calender-card ${show ? 'open' : 'close'} flex-none my-5 border-r border-b rounded-br-2xl border-[#38383f] text-center transition-all duration-500`}
            onClick={() => setShow(!show)}
        >
            <div className={`calender-preview ${!show ? 'mt-[150px]' : ''}`}>
                <div className={`calender-country flex ${show ? 'flex-row' : 'flex-col'} md:flex-col items-center gap-2 md:gap-1 px-[15px] md:px-0`}>
                    <img
                        src={image}
                        className={`h-8 w-12 rounded ${!show ? 'mx-auto mb-2.5' : ''}`}
                        alt={city}
                    />

                    <h3 className="text-13 f1-bold text-[#949498]">{city}</h3>
                </div>
                <div className={show ? 'block fadeIn-animate' : 'hidden'}>
                    <div className='text-left md:text-center mb-2.5 pt-5 px-[15px]'>
                        <a href='#'><h3 className='text-base md:text-2xl f1-bold mb-[15px] leading-5 text-white'>{linkText}</h3></a>
                        <p className='text-[#949498] text-13 font-bold'>{`${startDay} ${shortenMonth(startMonth)} ${year}`} - {`${endDay} ${shortenMonth(endMonth)} ${year}`}</p>
                    </div>

                    <div className='pl-2 pr-2.5 md:pt-[13px] md:pb-2 rounded-tr-xl rounded-br-xl md:rounded-xl md:px-[50px] mr-2.5 md:mr-0 bg-[#006341]'>
                        <div className='flex gap-2 justify-center items-center text-10 f1-bold md:pb-2 md:pt-2.5 md:h-22'>
                            <div className='flex-1 md:flex-none flex md:order-1 gap-2 justify-center items-center'>
                                <img className='w-[60px] h-[60px] md:w-20 md:h-20' src={ClockImg} alt='rolex clock' />
                                <div className='flex-1 text-left'>
                                    <div className='text-[#949498] mb-2'>
                                        {city}
                                        <br />
                                        11:24
                                    </div>
                                    <div className='text-white'>
                                        Your Time
                                        <br />
                                        11:24
                                    </div>
                                </div>
                            </div>
                            <div className='basis-1/4 flex justify-center h-20 md:h-auto pl-2 items-center md:pr-5 border-l md:border-l-0 border-[rgba(237,237,237,.1)]'>
                                <div className='rolex-logo' />
                            </div>
                        </div>
                    </div>

                    <div className='px-4 md:px-[50px] py-5 flex flex-col md:flex-row md:items-center text-xs gap-2.5'>
                        <OutlinedButton className='flex-1' content='Sync calender' icon={(<i className='icon icon-calendar text-lg' />)} />
                        <OutlinedButton className='flex-1' content='Convert to track time' />
                    </div>

                    <div className='grid lg:grid-cols-2 gap-x-2.5 p-[15px] pt-0 lg:px-[50px]'>
                        {raceTypeList.map((race, i) => (
                            <CalenderTime key={i} {...race} />
                        ))}
                    </div>
                </div>
                <div className={show ? 'hidden' : 'block'}>
                    <time className="f1-bold text-2xl text-white leading-9">
                        {startAndEndDate.slice(startAndEndDate.length - 2)}
                    </time>
                    <br />
                    <time className="font-bold text-13 text-[#949498] leading-9">
                        {shortenMonth(endMonth)}
                    </time>
                </div>
            </div>
        </article>
    );
};

export default CalenderArticle;
