import React from 'react';

import Button from 'components/shared/Button';

import AuthenticImg from 'assets/images/topics/authentic.png';
import ActionImg from 'assets/images/topics/action.png';
import MerchandiseImg from 'assets/images/topics/merchandise.png';

const storeList = [
    {
        title: 'F1® Authentics - F1 and team memorabilia',
        background: AuthenticImg,
        anchor: 'SHOP NOW',
        href: '#',
    },
    {
        title: 'F1® Store - Official F1 & team merchandise',
        background: MerchandiseImg,
        anchor: 'SHOP NOW',
        href: '#',
    },
    {
        title: 'Get closer to the action with F1® TV',
        background: ActionImg,
        anchor: 'SUBSCRIBE NOW',
        href: '#',
    },
];

const Store = () => {
    return (
        <section className="container mx-auto my-5">
            <div className="flex flex-col md:flex-row gap-2.5">
                {storeList.map((store) => (
                    <a
                        href={store.href}
                        key={store.title}
                        className="link-authentic flex-1 relative p-2.5 pt-5 rounded-md overflow-hidden"
                    >
                        <div className="pt-2.5 pr-2.5 text-white border-t-2 border-r-2 border-white rounded-tr-2xl h-full">
                            <div className="flex flex-col link-card px-5 pt-2.5">
                                <h2 className="w-2/3 md:w-full flex-1 f1-bold text-xl md:text-[25px] leading-6 md:leading-[30px] mb-5">
                                    {store.title}
                                </h2>
                                <Button
                                    href={store.href}
                                    className="!w-max text-xs"
                                >
                                    {store.anchor}
                                </Button>
                            </div>
                        </div>
                        <div className="absolute inset-0 -z-10">
                            <img
                                className="w-full h-full object-cover"
                                src={store.background}
                                alt={store.title}
                            />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Store;
