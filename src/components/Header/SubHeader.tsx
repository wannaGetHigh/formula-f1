import React from 'react';

import { LogoIcon } from 'assets/icon';
import LatestTab from './LatestTab';
import ScheduleTab from './ScheduleTab';
import ResultTab from './ResultTab';
import DriverTab from './DriverTab';
import TeamsTab from './TeamsTab';
import GamingTab from './GamingTab';

const subNavList = [
    {
        name: 'Latest',
        href: '#',
        secondNav: LatestTab,
    },
    {
        name: 'Video',
        href: '#',
        secondNav: null,
    },
    {
        name: 'F1 Unlocked',
        href: '#',
        secondNav: null,
    },
    {
        name: 'Schedule',
        href: '#',
        secondNav: ScheduleTab,
    },
    {
        name: 'Results',
        href: '#',
        secondNav: ResultTab,
    },
    {
        name: 'Drivers',
        href: '#',
        secondNav: DriverTab,
    },
    {
        name: 'Teams',
        href: '#',
        secondNav: TeamsTab,
    },
    {
        name: 'Gaming',
        href: '#',
        secondNav: GamingTab,
    },
    {
        name: 'LiveTiming',
        href: '#',
        secondNav: null,
    },
];

const SubHeader = () => {
    return (
        <div className="bg-red-main">
            <div className="block lg:hidden relative mx-auto flex gap-2 items-center">
                <button className="block lg:hidden w-[76px] h-full text-white">
                    <i className="icon icon-burger text-2xl" />
                </button>

                <div className="flex-1">
                    <LogoIcon width={120} height={30} className="mx-auto" />
                </div>

                <button className="block lg:hidden text-white bg-black-carbon rounded my-2.5 mx-[15px]">
                    <a href="#" className="block p-2 px-[15px]">
                        <i className="icon icon-user text-2xl" />
                    </a>
                </button>
            </div>

            <div className="header-container mx-auto hidden lg:flex items-center">
                <a href="#" className="mx-[30px]">
                    <LogoIcon width={130} height={33} className="mx-auto" />
                </a>
                <ul className="sub-header flex text-xs text-white">
                    {subNavList.map((nav) => (
                        <li key={nav.name} className={nav.secondNav ? 'expandable' : ''}>
                            <a
                                href={nav.href}
                                className="relative block px-[6px] pt-5 pb-[13px] leading-8"
                            >
                                <span className="block f1 pr-3 pb-[6px]">
                                    {nav.name}&nbsp;
                                    {nav.secondNav && (
                                        <i className="icon icon-chevron-down ml-0.5" />
                                    )}
                                </span>
                            </a>
                            {!!nav.secondNav && (
                                <div className="second-nav">
                                    <div className='header-container mx-auto'>
                                        <nav.secondNav />
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SubHeader;
