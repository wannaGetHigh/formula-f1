import React from 'react';

const Header = () => {
    return (
        <div className='fixed top-0 right-0 left-0 flex gap-2 items-center h-[52px] bg-red-main z-20'>
            <button className='w-[76px] h-full text-white'>
                <i className='icon icon-burger text-2xl' />
            </button>

            <div className='flex-1'>
                <img src='../../assets/icon/f1_logo.svg' alt='Logo' />
            </div>

            <button className='text-white bg-black-15 rounded my-2.5 mx-[15px]'>
                <a href='#' className='px-2.5 py-[5px]'>
                    <i className='icon icon-user text-2xl' />
                </a>
            </button>
        </div>
    );
};

export default Header;
