import React, { useState } from 'react';

import DriversTab from './DriversTab';
import { CONSTRUCTOR, DRIVER, LAST_RACE } from 'constant';
import ConstructorTab from './ConstructorTab';
import LastRaceTab from './LastRaceTab';

const tabs = [
    {
        name: DRIVER,
    },
    {
        name: CONSTRUCTOR,
    },
    {
        name: LAST_RACE,
    },
];

const BillBoard = () => {
    const [tab, setTab] = useState(DRIVER);

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
                    <div className='m-2.5 px-2.5'>
                        {tab === DRIVER && (
                            <DriversTab />
                        )}
                        {tab === CONSTRUCTOR && (
                            <ConstructorTab />
                        )}
                        {tab === LAST_RACE && (
                            <LastRaceTab />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillBoard;
