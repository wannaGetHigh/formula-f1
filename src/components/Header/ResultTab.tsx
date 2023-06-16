import React from 'react';
import NavTitle from './NavTitle';

const titleList = [
    {
        name: '2023 Season',
        href: '#',
    },
    {
        name: 'Driver Standings',
        href: '#',
    },
    {
        name: 'Constructor Standings',
        href: '#',
    },
    {
        name: 'Archive 1950-2022',
        href: '#',
    },
    {
        name: 'F1 Awards',
        href: '#',
    },
];

const ResultTab = () => {
    return (
        <div className="px-[30px] py-10">
            <NavTitle titleList={titleList} />
        </div>
    );
};

export default ResultTab;
