import React from 'react';
import NavTitle from './NavTitle';

const titleList = [
    {
        name: 'All Drivers',
        href: '#',
    },
    {
        name: 'Hall of Fame',
        href: '#',
    },
];

const driverList = [
    {
        name: 'Alexander',
        surName: 'ALBON',
        color: '#37bedd',
        href: '#',
    },
    {
        name: 'Fernando',
        surName: 'ALONSO',
        color: '#358c75',
        href: '#',
    },
    {
        name: 'Valtteri',
        surName: 'BOTTAS',
        color: '#c92d4b',
        href: '#',
    },
    {
        name: 'Nyck',
        surName: 'DE VRIES',
        color: '#5e8faa',
        href: '#',
    },
    {
        name: 'Pierre',
        surName: 'GASLY',
        color: '#2293d1',
        href: '#',
    },
    {
        name: 'Lewis',
        surName: 'HAMILTON',
        color: '#6cd3bf',
        href: '#',
    },
    {
        name: 'Nico',
        surName: 'HULKENBERG',
        color: '#b6babd',
        href: '#',
    },
    {
        name: 'Charles',
        surName: 'LECLERC',
        color: '#f91536',
        href: '#',
    },
    {
        name: 'Kevin',
        surName: 'MAGNUSSEN',
        color: '#b6babd',
        href: '#',
    },
    {
        name: 'Lando',
        surName: 'NORRIS',
        color: '#f58020',
        href: '#',
    },
    {
        name: 'Esteban',
        surName: 'OCON',
        color: '#2293d1',
        href: '#',
    },
    {
        name: 'Sergio',
        surName: 'PEREZ',
        color: '#3671c6',
        href: '#',
    },
    {
        name: 'Oscar',
        surName: 'PIASTRI',
        color: '#f58020',
        href: '#',
    },
    {
        name: 'George',
        surName: 'RUSSELL',
        color: '#6cd3bf',
        href: '#',
    },
    {
        name: 'Carlos',
        surName: 'SAINZ',
        color: '#f91536',
        href: '#',
    },
    {
        name: 'Logan',
        surName: 'SARGEANT',
        color: '#37bedd',
        href: '#',
    },
    {
        name: 'Lance',
        surName: 'STROLL',
        color: '#358c75',
        href: '#',
    },
    {
        name: 'Yuki',
        surName: 'TSUNODA',
        color: '#5e8faa',
        href: '#',
    },
    {
        name: 'Max',
        surName: 'VERSTAPPEN',
        color: '#3671c6',
        href: '#',
    },
    {
        name: 'Guanyu',
        surName: 'ZHOU',
        color: '#c92d4b',
        href: '#',
    },
];

const DriverTab = () => {
    return (
        <div className="px-[30px] py-10">
            <NavTitle titleList={titleList} />

            <nav className="grid grid-cols-4 pt-10">
                {driverList.map((driver) => {
                    const style = { '--driver-color': driver.color } as React.CSSProperties;

                    return (
                        <a
                            key={driver.name}
                            href={driver.href}
                            className="px-[15px] pb-[9px] text-white text-xs leading-[19px]"
                            style={style}
                        >
                            <div className="driver-item flex gap-2.5 items-center py-2.5 pr-8 pl-2 border-r border-b border-gray-mid rounded-br-xl">
                                <div className="w-1 h-[13px]" style={{ backgroundColor: driver.color }} />
                                <p className="flex-1 f1">
                                    {driver.name}&nbsp;
                                    <span className="f1-bold">
                                        {driver.surName}
                                    </span>
                                </p>
                                <i className="icon icon-chevron-right text-base" />
                            </div>
                        </a>
                    );
                })}
            </nav>
        </div>
    );
};

export default DriverTab;
