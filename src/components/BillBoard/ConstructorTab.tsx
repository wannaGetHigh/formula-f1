import React from 'react';

import Button from 'components/shared/Button';

import MercedesImg from 'assets/images/constructors/Mercedes.jpg';
import RedBullImg from 'assets/images/constructors/RedBull.png';
import AstonMartinImg from 'assets/images/constructors/AstonMartin.jpg';

import TeamMercedesImg from 'assets/images/constructors/TeamCarMercedes.png';
import TeamRedBullImg from 'assets/images/constructors/TeamCarRedBull.png';
import TeamAstonMartinImg from 'assets/images/constructors/TeamCarAstonMartin.jpg';
import TeamFerrariImg from 'assets/images/constructors/TeamCarFerrari.png';
import TearAlpineImg from 'assets/images/constructors/TeamCarAlpine.png';
import TeamMcLarenImg from 'assets/images/constructors/TeamCarMcLaren.png';
import TeamHaasImg from 'assets/images/constructors/TeamCarHaas.png';
import TeamAlfaRomeoImg from 'assets/images/constructors/TeamCarAlfaRomeo.png';
import TeamAlphaTauriImg from 'assets/images/constructors/TeamCarAlphaTauri.png';
import TeamWilliamsImg from 'assets/images/constructors/TeamCarWilliams.png';

const constructorList = [
    {
        name: 'Mercedes',
        color: '#6CD3BF',
        logo: MercedesImg,
        pos: '2',
        teamCar: TeamMercedesImg,
        href: '#',
    },
    {
        name: 'Red Bull',
        color: '#3671C6',
        logo: RedBullImg,
        pos: '1',
        teamCar: TeamRedBullImg,
        href: '#',
    },
    {
        name: 'Aston Martin',
        color: '#358C75',
        logo: AstonMartinImg,
        pos: '3',
        teamCar: TeamAstonMartinImg,
        href: '#',
    },
];

const topTenList = [
    {
        driver1: 'Verstappen',
        driver2: 'Perez',
        pos: '1',
        color: '#3671C6',
        point: '287',
        name: 'Red Bull Racing',
        href: '#',
        img: TeamRedBullImg,
    },
    {
        driver1: 'Hamilton',
        driver2: 'Russell',
        pos: '2',
        color: '#6CD3BF',
        point: '152',
        name: 'Mercedes',
        href: '#',
        img: TeamMercedesImg,
    },
    {
        driver1: 'Alonso',
        driver2: 'Stroll',
        pos: '3',
        color: '#358C75',
        point: '134',
        name: 'Aston Martin',
        href: '#',
        img: TeamAstonMartinImg,
    },
    {
        driver1: 'Leclerc',
        driver2: 'Sainz',
        pos: '4',
        color: '#F91536',
        point: '100',
        name: 'Ferrari',
        href: '#',
        img: TeamFerrariImg,
    },
    {
        driver1: 'Gasly',
        driver2: 'Ocon',
        pos: '5',
        color: '#2293D1',
        point: '40',
        name: 'Alpine',
        href: '#',
        img: TearAlpineImg,
    },
    {
        driver1: 'Norris',
        driver2: 'Piastri',
        pos: '6',
        color: '#F58020',
        point: '17',
        name: 'McLaren',
        href: '#',
        img: TeamMcLarenImg,
    },
    {
        driver1: 'Magnussen',
        driver2: 'Hulkenberg',
        pos: '7',
        color: '#B6BABD',
        point: '8',
        name: 'Haas',
        href: '#',
        img: TeamHaasImg,
    },
    {
        driver1: 'Bottas',
        driver2: 'Zhou',
        pos: '8',
        color: '#C92D4B',
        point: '8',
        name: 'Alfa Romeo',
        href: '#',
        img: TeamAlfaRomeoImg,
    },
    {
        driver1: 'Tsunoda',
        driver2: 'De Vries',
        pos: '9',
        color: '#5E8FAA',
        point: '25',
        name: 'AlphaTauri',
        href: '#',
        img: TeamAlphaTauriImg,
    },
    {
        driver1: 'Albon',
        driver2: 'Sargeant',
        pos: '10',
        color: '#37BEDD',
        point: '25',
        name: 'Williams',
        href: '#',
        img: TeamWilliamsImg,
    },
];

const ConstructorTab = () => {
    return (
        <>
            <h3 className="text-wide f1-wide text-[25px] leading-[30px] mb-5 mt-[30px] md:mt-[50px] text-white text-center">
                Constructor Standings
            </h3>
            <div className="mt-[30px] flex justify-center items-end gap-2.5 xl:w-5/6 px-2.5 mx-auto md:pb-10">
                {constructorList.map((cons) => (
                    <a
                        key={cons.pos}
                        href={cons.href}
                        className={`${
                            cons.pos === '1'
                                ? 'w-full md:w-[35%]'
                                : 'w-[30%] hidden md:block'
                        } relative`}
                    >
                        <div className="pt-[15px] bg-white rounded-tl-2xl rounded-tr-2xl text-center md:mx-5">
                            <img
                                className="max-w-[200px] w-[85%] mx-auto"
                                src={cons.logo}
                                alt={cons.name}
                                loading="lazy"
                            />
                            <i
                                className={`icon !leading-0 icon-slash-${cons.pos}`}
                                style={{ color: cons.color, fontSize: 120 }}
                            />
                        </div>
                        <div className="absolute right-0 left-0 -bottom-8 bg-white md:bg-transparent">
                            <img
                                className="max-w-[290px] md:max-w-full mx-auto"
                                src={cons.teamCar}
                                alt={cons.name}
                                loading="lazy"
                            />
                        </div>
                    </a>
                ))}
            </div>

            <div className="xl:w-5/6 mx-auto p-2.5 mt-2.5 md:px-2.5">
                {topTenList.map((item) => (
                    <a
                        href={item.href}
                        key={item.pos}
                        className="toplist-item bg-white rounded-[5px] mb-0.5 flex gap-2 items-center py-[15px] pl-5 pr-2.5 text-black-carbon text-sm transition-color duration-200"
                    >
                        <span className="f1-bold w-5 text-end">{item.pos}</span>
                        <span
                            className="w-1 h-[14px]"
                            style={{ backgroundColor: item.color }}
                        />
                        <p className="f1-bold text-sm">{item.name}</p>
                        <span className="text-13 text-[#67676d] hidden md:block">
                            {item.driver2 ? `${item.driver1} /` : item.driver1}
                            {item.driver2}
                        </span>
                        <div className="flex-1 flex justify-end items-center text-end font-bold">
                            <img
                                className="max-w-full w-[130px] hidden md:block"
                                src={item.img}
                                alt={item.name}
                                loading="lazy"
                            />
                            <span className="py-0.5 px-2.5 text-13 rounded-2xl text-black-carbon bg-[#ededed] mr-2.5">
                                {item.point} PTS
                            </span>
                            <i className="icon icon-chevron-right text-red-main" />
                        </div>
                    </a>
                ))}
            </div>

            <div className="flex items-center justify-center mt-2.5 mb-5">
                <Button href="#">VIEW FULL STANDINGS</Button>
            </div>
        </>
    );
};

export default ConstructorTab;
