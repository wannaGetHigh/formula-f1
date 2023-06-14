import React from 'react';

interface SubTitleProps {
    title: string;
    isUnlock?: boolean
    className?: string
}

const SubTitle = ({ title = '', isUnlock, className = '' }: SubTitleProps) => {
    return (
        <p className={className}>
            <span className="text-red-main text-11 font-bold">{title}</span>
            {isUnlock && (
                <span className="h-4 inline-block leading-none font-bold px-1 py-0.5 border border-red-main ml-1 rounded-[20px] text-10 bg-white">
                    F1 UNLOCKED
                </span>
            )}
        </p>
    );
};

export default SubTitle;
