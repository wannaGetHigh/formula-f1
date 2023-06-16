import React from 'react';

interface NavTitleProps {
    titleList: Array<{ name: string; href: string }>
}

const NavTitle = ({ titleList }: NavTitleProps) => {
    return (
        <div className="my-2.5 mx-[15px] pb-2 border-r border-b rounded-br-2xl border-gray-mid text-base f1-bold">
            {titleList.map(title => (
                <a key={title.name} href={title.href} className="second-nav-item relative inline-block pb-1 mr-[50px]">
                    {title.name}
                    <i className="icon icon-chevron-right text-red-main ml-1" />
                </a>
            ))}
        </div>
    );
};

export default NavTitle;
