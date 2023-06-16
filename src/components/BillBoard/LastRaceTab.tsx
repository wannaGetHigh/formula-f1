import React from 'react'

import Button from 'components/shared/Button'

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

const LastRaceTab = () => {
  return (
        <>
            <div className="xl:w-5/6 px-2.5 mx-auto text-white text-center mb-5">
                <h3 className="text-wide f1-black text-[42px] leading-[48px] mb-[5px] mt-2.5">
                    SPAIN
                </h3>
                <p className='f1-black mb-[15px] text-3xl'>2023</p>
                <a href='#' className='f1 text-xs'>FORMULA 1 AWS GRAN PREMIO DE ESPAÑA 2023 <i className='icon icon-chevron-right text-red-main' /></a>
            </div>

            <div className="xl:w-5/6 mx-auto p-2.5 mt-2.5 bg-[#f3f3f3] rounded-2xl">
                {topTenList.map((item) => (
                    <a
                        href={item.href}
                        key={item.pos}
                        className="toplist-item bg-white rounded-[5px] mb-0.5 flex gap-2 items-center py-[15px] pl-5 pr-2.5 text-black-carbon text-sm transition-colors duration-200"
                    >
                        <span className="f1-bold w-5 text-end">{item.pos}</span>
                        <span className='w-1 h-[14px]' style={{ backgroundColor: item.color }} />
                        <p className="f1">
                            <span className='hidden md:inline'>{item.name}</span>&nbsp;
                            <span className="f1-bold uppercase">
                                {item.surName}
                            </span>
                        </p>
                        <span className="hidden md:block text-13 text-gray-mid">
                            {item.sponsor}
                        </span>
                        <div className="flex-1 text-end">
                            <span className="py-0.5 px-2.5 text-13 rounded-2xl text-black-carbon bg-[#ededed] mr-2.5">
                                {item.point} PTS
                            </span>
                            <i className="icon icon-chevron-right text-red-main" />
                        </div>
                    </a>
                ))}
            </div>

            <div className="flex items-center justify-center mt-2.5 mb-5">
                <Button href="#">RACE RESULTS</Button>
            </div>
        </>
  )
}

export default LastRaceTab