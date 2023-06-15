import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = '' }: ButtonProps) => {
  return (
    <p className={`${className} bg-red-main hover:bg-white border border-2 border-red-main text-white hover:text-black rounded transition-colors duration-300`}>
        <a href='#' className='button-main inline-block py-3 pl-[15px] pr-[35px] font-bold text-13 text-center leading-[15px]'>
            {children}
            <i className='icon icon-chevron-right' />
        </a>
    </p>
  )
}

export default Button