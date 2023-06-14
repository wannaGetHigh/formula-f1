import React from 'react';
import SubTitle from './SubTitle';

interface CardItemProps {
    src?: string;
    type: string;
    desc: string;
    icon?: string;
    showBadge?: boolean;
    descClass?: string;
    theme?: 'black' | 'white';
    border?: boolean;
}

const CardItem = ({ src, icon, type, desc, showBadge = false, descClass = '', theme = 'white', border = true }: CardItemProps) => {
    return (
        <a
            href="#"
            className={`sub-feature-link flex flex-col px-2.5 pb-4 theme-${theme}`}
        >
            {!!src && (
                <div className="relative overflow-hidden">
                    <picture className="block relative transition-transform">
                        <img
                            className="w-full"
                            loading="lazy"
                            src={src}
                            alt={desc}
                        />
                    </picture>
                    {icon && (
                        <div className="absolute bottom-0 left-0 p-2.5 rounded-tr-2xl bg-white h-[38px] hover-transition">
                            <i className={`icon text-red-main text-lg leading-1 ${icon}`} />
                        </div>
                    )}
                </div>
            )}
            <div className={`flex-1 relative z-10 p-[15px] pb-[35px] leading-[18px] rounded-br-2xl hover-transition bg-white border-b border-r ${
                border ? 'border-gray-300' : 'border-transparent'
            }`}>
                <SubTitle title={type} showBadge={showBadge} className="mb-[5px]" />
                <p className={`hover-transition ${descClass}`}>{desc}</p>
            </div>
        </a>
    );
};

export default CardItem;
