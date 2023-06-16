import React from 'react';

import { LogoIcon, LogoTVIcon } from 'assets/icon';
import FiaLogoImg from 'assets/images/fia_logo.png';
import SubHeader from './SubHeader';

const institutionLinks = [
    {
        type: 'F1 ®',
        isActive: true,
        href: '#',
    },
    {
        type: 'F2 ™',
        isActive: false,
        href: '#',
    },
    {
        type: 'F3 ™',
        isActive: false,
        href: '#',
    },
    {
        type: 'F1 ® ACADEMY',
        isActive: false,
        href: '#',
    },
];

const headerNav = [
    {
        name: 'AUTHENTICS',
        href: '#',
    },
    {
        name: 'STORE',
        href: '#',
    },
    {
        name: 'TICKETS',
        href: '#',
    },
    {
        name: 'HOSPITALITY',
        href: '#',
    },
    {
        name: 'EXPERIENCES',
        href: '#',
    },
];

const Header = () => {
    return (
        <header className="fixed top-0 right-0 left-0 z-20">
            <div className="header-container hidden lg:flex justify-between items-center gap-2 xl:gap-6 bg-white h-[50px] lg:mx-auto px-2.5">
                <div className="flex gap-2.5 items-center h-full">
                    <div className="pr-2 xl:pr-5 border-r border-gray-light xl:mr-2.5">
                        <img
                            src={FiaLogoImg}
                            alt="fia"
                            className="max-w-full h-[25px] opacity-40"
                        />
                    </div>

                    <ul className="institution-links h-full">
                        {institutionLinks.map((link) => (
                            <li
                                key={link.type}
                                className={`${
                                    link.isActive
                                        ? 'opacity-100 active'
                                        : 'opacity-40'
                                } hover:opacity-100 cursor-pointer inline-block h-full relative`}
                            >
                                <a
                                    href={link.href}
                                    className="flex items-center block h-full p-1 xl:p-2.5 f1-bold text-black-carbon text-xs leading-6"
                                >
                                    <span>{link.type}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-2.5">
                    <ul className="flex  gap-2 xl:gap-6 text-black-carbon py-1 px-4 border-r border-gray-light">
                        {headerNav.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block navigate-item text-xs"
                                >
                                    <span className="relative py-1">
                                        {link.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="py-1 px-2.5 border-r border-gray-light">
                        <a href="#">
                            <LogoTVIcon width={75} height={12} />
                        </a>
                    </div>

                    <div className="flex gap-2 xl:px-2.5 text-xs font-bold text-white leading-[15px]">
                        <a
                            href="#"
                            className="pt-2.5 pb-3 pr-4 rounded bg-black-carbon"
                        >
                            <i className="icon icon-user pl-4 text-base align-bottom mr-1" />
                            SIGN IN
                        </a>
                        <a
                            href="#"
                            className="pt-2.5 pb-3 px-4 rounded bg-red-main"
                        >
                            SUBSCRIBE
                        </a>
                    </div>
                </div>
            </div>

            <SubHeader />
        </header>
    );
};

export default Header;
