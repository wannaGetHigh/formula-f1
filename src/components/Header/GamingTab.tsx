import React from 'react';

import NavTitle from './NavTitle';

const titleList = [
    {
        name: 'Esports',
        href: '#',
    },
    {
        name: 'Fantasy',
        href: '#',
    },
    {
        name: 'F1 23',
        href: '#',
    },
    {
        name: 'F1 Manager 23',
        href: '#',
    },
    {
        name: 'F1 Play',
        href: '#',
    },
    {
        name: 'F1 Mobile Racing',
        href: '#',
    },
    {
        name: 'F1 Clash',
        href: '#',
    },
];

const GamingTab = () => {
    return (
        <div className="px-[30px] py-10">
            <NavTitle titleList={titleList} />
        </div>
    );
};

export default GamingTab;
