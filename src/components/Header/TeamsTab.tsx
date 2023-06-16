import React from 'react';
import NavTitle from './NavTitle';

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

const titleList = [
    {
        name: 'All Teams',
        href: '#',
    },
];

const teamList = [
    {
        color: '#3671C6',
        name: 'Red Bull',
        href: '#',
        img: TeamRedBullImg,
    },
    {
        color: '#6CD3BF',
        name: 'Mercedes',
        href: '#',
        img: TeamMercedesImg,
    },
    {
        color: '#358C75',
        name: 'Aston Martin',
        href: '#',
        img: TeamAstonMartinImg,
    },
    {
        color: '#F91536',
        name: 'Ferrari',
        href: '#',
        img: TeamFerrariImg,
    },
    {
        color: '#2293D1',
        name: 'Alpine',
        href: '#',
        img: TearAlpineImg,
    },
    {
        color: '#F58020',
        name: 'McLaren',
        href: '#',
        img: TeamMcLarenImg,
    },
    {
        color: '#B6BABD',
        name: 'Haas',
        href: '#',
        img: TeamHaasImg,
    },
    {
        color: '#C92D4B',
        name: 'Alfa Romeo',
        href: '#',
        img: TeamAlfaRomeoImg,
    },
    {
        color: '#5E8FAA',
        name: 'AlphaTauri',
        href: '#',
        img: TeamAlphaTauriImg,
    },
    {
        color: '#37BEDD',
        name: 'Williams',
        href: '#',
        img: TeamWilliamsImg,
    },
];

const TeamsTab = () => {
    return (
        <div className="px-[30px] py-10">
            <NavTitle titleList={titleList} />

            <nav className="grid grid-cols-4">
                {teamList.map((team) => {
                    const style = {
                        '--team-color': team.color,
                    } as React.CSSProperties;

                    return (
                        <a
                            key={team.name}
                            href={team.href}
                            className="px-[15px] pt-[35px]"
                            style={style}
                        >
                            <div className="team-container border-r border-b border-gray-mid rounded-br-xl pb-2 transition-colors">
                                <p className="flex justify-between f1 text-sm pr-5">{team.name} <i className='icon icon-chevron-right' /></p>
                                <div className="team-item relative pt-1 pl-2">
                                    <img
                                        src={team.img}
                                        alt={team.name}
                                        className="max-w-full"
                                    />
                                </div>
                            </div>
                        </a>
                    );
                })}
            </nav>
        </div>
    );
};

export default TeamsTab;
