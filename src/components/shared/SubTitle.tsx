import React from 'react';

interface SubTitleProps {
    title: string;
    showBadge?: boolean
    className?: string
}

const SubTitle = ({ title = '', showBadge, className = '' }: SubTitleProps) => {
    return (
        <p className={className}>
            <span className="text-red-main text-11 font-bold">{title}</span>
            {showBadge && (
                <span className="h-4 inline-block leading-none font-bold px-1 py-0.5 border border-red-main ml-1 rounded-[20px] text-black-carbon text-10 bg-white ml-2">
                    F1 UNLOCKED
                </span>
            )}
        </p>
    );
};

export default SubTitle;
