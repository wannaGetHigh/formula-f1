import React, { useState } from 'react';
import DriversTab from './DriversTab';

const tabs = [
    {
        name: 'driver',
    },
    {
        name: 'constructor',
    },
    {
        name: 'last race',
    },
];

const BillBoard = () => {
    const [tab, setTab] = useState('driver');

    return (
        <div>
            <div className="container mx-auto flex justify-center items-center text-sm text-black-carbon tracking-wide text-center f1">
                {tabs.map((item) => (
                    <div
                        key={item.name}
                        className={`tab-item py-3 md:py-5 ${
                            tab === item.name ? 'active' : ''
                        }`}
                        onClick={() => setTab(item.name)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className='billboard-container relative bg-[#f3f3f3] py-5'>
                <div className='container mx-auto relative px-2.5'>
                    <h3 className='text-wide f1-wide text-[25px] leading-[30px] mb-5 mt-[30px] text-white text-center'>Driver Standings</h3>
                    <div className='m-2.5 px-2.5'>
                        {tab === 'driver' && (
                            <DriversTab />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillBoard;
