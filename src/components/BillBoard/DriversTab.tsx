import React from 'react';

import MexicoImg from 'assets/images/flags/mexico.jpg';
import NetherLandImg from 'assets/images/flags/Netherlands.jpg';
import SpainImg from 'assets/images/flags/spanish-flag.jpg';
import AlonsoImg from 'assets/images/drivers/ALONSO.png';
import VerstappenImg from 'assets/images/drivers/VERSTAPPEN.png';
import PerezImg from 'assets/images/drivers/PEREZ.png';
import Button from 'components/shared/Button';

const driverList = [
    {
        name: 'Sergio',
        surName: 'Perez',
        pos: '2',
        color: '#3671C6',
        flag: MexicoImg,
        country: 'Mexico',
        avatar: PerezImg,
        href: '#',
    },
    {
        name: 'Max',
        surName: 'Verstappen',
        pos: '1',
        color: '#3671C6',
        flag: NetherLandImg,
        country: 'Mexico',
        avatar: VerstappenImg,
        href: '#',
    },
    {
        name: 'Fernando',
        surName: 'Alonso',
        pos: '3',
        color: '#358C75',
        flag: SpainImg,
        country: 'Spain',
        avatar: AlonsoImg,
        href: '#',
    },
];

const topTenList = [
    {
        name: 'Max',
        surName: 'Verstappen',
        pos: '1',
        color: '#3671C6',
        point: '117',
        sponsor: 'Red Bull Racing',
        href: '#',
    },
    {
        name: 'Sergio',
        surName: 'Perez',
        pos: '2',
        color: '#3671C6',
        point: '117',
        sponsor: 'Red Bull Racing',
        href: '#',
    },
    {
        name: 'Fernando',
        surName: 'Alonso',
        pos: '3',
        color: '#358C75',
        point: '99',
        sponsor: 'Aston Martin',
        href: '#',
    },
    {
        name: 'Lewis',
        surName: 'Hamilton',
        pos: '4',
        color: '#6CD3BF',
        point: '87',
        sponsor: 'Mercedes',
        href: '#',
    },
    {
        name: 'George',
        surName: 'Russell',
        pos: '5',
        color: '#6CD3BF',
        point: '65',
        sponsor: 'Mercedes',
        href: '#',
    },
    {
        name: 'Carlos',
        surName: 'Sainz',
        pos: '6',
        color: '#F91536',
        point: '58',
        sponsor: 'Ferrari',
        href: '#',
    },
    {
        name: 'Charles',
        surName: 'Leclerc',
        pos: '7',
        color: '#F91536',
        point: '42',
        sponsor: 'Ferrari',
        href: '#',
    },
    {
        name: 'Lance',
        surName: 'Stroll',
        pos: '8',
        color: '#358C75',
        point: '35',
        sponsor: 'Aston Martin',
        href: '#',
    },
    {
        name: 'Esteban',
        surName: 'Ocon',
        pos: '9',
        color: '#2293D1',
        point: '25',
        sponsor: 'Alpine',
        href: '#',
    },
    {
        name: 'Pierre',
        surName: 'Gasly',
        pos: '10',
        color: '#2293D1',
        point: '25',
        sponsor: 'Alpine',
        href: '#',
    },
];

const DriversTab = () => {
    return (
        <>
            <h3 className='text-wide f1-wide text-[25px] leading-[30px] mb-5 mt-[30px] md:mt-[50px] text-white text-center'>Driver Standings</h3>
            <div className="mt-28 xl:mt-40 flex justify-center items-end gap-2.5 xl:w-5/6 px-2.5 mx-auto">
                {driverList.map((driver) => (
                    <a
                        key={driver.pos}
                        href={driver.href}
                        className={`${
                            driver.pos === '1'
                                ? 'w-full md:w-1/3'
                                : 'flex-1 hidden md:block'
                        }`}
                    >
                        <div
                            style={{
                                height: driver.pos === '1' ? '130px' : '110px',
                            }}
                            className="relative bg-white rounded-tl-2xl rounded-tr-2xl"
                        >
                            <i
                                className={`icon icon-position icon-slash-${driver.pos}`}
                                style={{ color: driver.color }}
                            />
                            <div
                                className="absolute bottom-0 right-0 left-0 h-2.5"
                                style={{ backgroundColor: driver.color }}
                            />
                            <img
                                className="absolute right-0 md:left-0 bottom-0 w-[290px] md:w-auto"
                                src={driver.avatar}
                                alt={driver.name}
                                loading='lazy'
                            />
                        </div>
                        <div className="hidden md:block bg-[#38383f] text-white leading-4 p-[25px] rounded-bl-2xl rounded-br-2xl">
                            <p className="flex items-baseline gap-2 text-sm f1">
                                {driver.name}
                                <img
                                    className="w-5"
                                    src={driver.flag}
                                    alt={driver.country}
                                />
                            </p>
                            <p className="text-lg f1-bold uppercase">
                                {driver.surName}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="xl:w-5/6 mx-auto p-2.5 -mt-2.5 md:mt-2.5">
                {topTenList.map((item) => (
                    <a
                        href={item.href}
                        key={item.pos}
                        className="toplist-item bg-white rounded-[5px] mb-0.5 flex gap-2 items-center py-[15px] pl-5 pr-2.5 text-black-carbon text-sm transition-color duration-200"
                    >
                        <span className="f1-bold w-5 text-end">{item.pos}</span>
                        <span className='w-1 h-[14px]' style={{ backgroundColor: item.color }} />
                        <p className="f1">
                            {item.name}&nbsp;
                            <span className="f1-bold uppercase">
                                {item.surName}
                            </span>
                        </p>
                        <span className="text-13 text-[#67676d]">
                            {item.sponsor}
                        </span>
                        <div className="flex-1 text-end font-bold">
                            <span className="py-0.5 px-2.5 text-13 rounded-2xl text-black-carbon bg-[#ededed] mr-2.5">
                                {item.point} PTS
                            </span>
                            <i className="icon icon-chevron-right text-red-main" />
                        </div>
                    </a>
                ))}
            </div>

            <div className='flex items-center justify-center mt-2.5 mb-5'>
                <Button href='#'>VIEW FULL STANDINGS</Button>
            </div>
        </>
    );
};

export default DriversTab;
