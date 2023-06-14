import React from 'react'

interface ButtonProps {
  className?: string;
}

const Button = ({ className = '' }: ButtonProps) => {
  return (
    <p className={className}>
        <a href='#' className='inline-block py-3 pl-[15px] pr-[35px] bg-red-main text-white font-bold text-13 rounded leading-[15px]'>
            VIEW LATEST NEW 
            <i className='icon icon-chevron-right' />
        </a>
    </p>
  )
}

export default Button