import { LogoIcon } from 'assets/icon';
import React from 'react';

const socialMediaList = [
    {
        icon: 'facebook',
        href: '#',
    },
    {
        icon: 'twitter',
        href: '#',
    },
    {
        icon: 'instagram',
        href: '#',
    },
    {
        icon: 'youtube',
        href: '#',
    },
];

const footerNav = [
    {
        title: { name: 'Lastes News', href: '#' },
        nav: [
            { name: 'What is F1?', href: '#' },
            { name: 'Video', href: '#' },
            { name: 'Drivers', href: '#' },
            { name: 'Teams', href: '#' },
            { name: 'Schedule', href: '#' },
        ],
    },
    {
        title: { name: 'Standings', href: '#' },
        nav: [
            { name: '2023 SEASON', href: '#' },
            { name: 'DRIVER STANDINGS', href: '#' },
            { name: 'CONSTRUCTOR STANDINGS', href: '#' },
            { name: 'ARCHIVE 1950-2022', href: '#' },
            { name: 'F1 AWARDS', href: '#' },
        ],
    },
    {
        title: { name: 'Gaming', href: '#' },
        nav: [
            { name: 'ESPORTS', href: '#' },
            { name: 'FANTASY', href: '#' },
            { name: 'F1 23', href: '#' },
            { name: 'F1 MANAGER 23', href: '#' },
            { name: 'F1 PLAY', href: '#' },
            { name: 'F1 MOBILE RACING', href: '#' },
            { name: 'F1 CLASH', href: '#' },
        ],
    },
    {
        title: { name: 'Live Timing', href: '#' },
        nav: [],
    },
    {
        title: { name: 'Tickets', href: '#' },
        nav: [
            { name: 'F1® Experiences', href: '#' },
            { name: 'Store', href: '#' },
            { name: 'Paddock Club', href: '#' },
            { name: 'F1® TV', href: '#' },
            { name: 'F1® Authentics', href: '#' },
        ],
    },
    {
        title: { name: 'Rules & Regulations', href: '#' },
        nav: [],
    },
];

const contactList = [
    { name: 'CONTACTS', href: '#' },
    { name: 'F1 TV SUPPORT', href: '#' },
    { name: 'PRIVACY POLICY', href: '#' },
    { name: 'COOKIES POLICY', href: '#' },
    { name: 'GUIDELINES', href: '#' },
    { name: 'LEGAL NOTICES', href: '#' },
    { name: 'CODE OF CONDUCT', href: '#' },
    { name: 'ANTI-BRIBERY', href: '#' },
    { name: 'HUMAN RIGHTS', href: '#' },
    { name: 'GENDER PAY REPORT', href: '#' },
    { name: 'TERMS OF USE', href: '#' },
    { name: 'PARTNERS', href: '#' },
    { name: 'F1® FAN VOICE', href: '#' },
    { name: 'BEYOND THE GRID - THE F1® PODCAST', href: '#' },
    { name: 'F1® CORPORATE SITE', href: '#' },
    { name: 'BECOME AN AFFILIATE', href: '#' },
    { name: 'OFFICIAL F1® RACE PROGRAMME', href: '#' },
    { name: 'MODERN SLAVERY STATEMENT', href: '#' },
];

const Footer = () => {
    return (
        <footer className="bg-black-carbon text-white  pt-0.5">
            <div className="bg-black-tuna">
                <div className="container mx-auto flex justify-between items-center p-2.5 mb-[35px]">
                    <div className="flex gap-2 items-center">
                        <h5 className="text-13 max-w-[105px] leading-none">
                            DOWNLOAD THE OFFICIAL F1 APP
                        </h5>
                        <a className="w-[135px] h-10" href="#">
                            <img src="" alt="Google Play" />
                        </a>
                        <a className="w-[135px] h-10" href="#">
                            <img src="" alt="Apple Store" />
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        {socialMediaList.map((media) => (
                            <a
                                href={media.href}
                                target="_blank"
                                rel="noreferrer"
                                className="h-10 w-10 border border-black-carbon hover:bg-black-carbon text-2xl leading-10 text-center rounded"
                            >
                                <i className={`icon icon-${media.icon}`} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto text-center">
                <h2 className="footer-title f1-bold text-lg mb-[30px] lg:mb-[50px]">
                    <a href="#">
                        <LogoIcon width={60} height={15} className='footer-logo inline-block mr-2' />
                        Our Partners
                        <i className="icon icon-chevron-right ml-1" />
                    </a>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 border-r-2.5 border-b-2.5 border-black-tuna rounded-br-2xl pr-5 pb-5 md:pb-[45px]">
                    {footerNav.map((nav) => (
                        <ul
                            key={nav.title.name}
                            className={`${
                                nav.nav.length === 0 ? 'hidden md:block' : ''
                            } text-sm text-left`}
                        >
                            <li className='mb-2'>
                                <a
                                    href={nav.title.href}
                                    className="block footer-nav f1-bold py-1"
                                >
                                    <span className="relative">
                                        {nav.title.name}
                                    </span>
                                </a>
                            </li>
                            <ul>
                                {nav.nav.map((item) => (
                                    <li>
                                        <a
                                            href={item.href}
                                            className="footer-nav block py-1 text-xs"
                                        >
                                            <span className="relative">
                                                {item.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    ))}
                </div>

                <ul className="mt-2.5 flex flex-wrap gap-x-2.5 md:gap-x-5 lg:gap-x-10 mr-10">
                    {contactList.map(contact => (
                        <li key={contact.name}>
                            <a href={contact.href} className='block footer-nav py-1 leading-6 text-xs font-bold'>
                                <span className='relative'>{contact.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='flex justify-between items-center gap-5 mt-2.5 py-2.5 border-t border-[#38383f]'>
                    <a href='#' className='w-20'>
                        <LogoIcon width={84} height={21} />
                    </a>
                    <h5 className='text-xs leading-8'>© 2003-2023 Formula One World Championship Limited</h5>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
