import React, { ReactNode } from 'react'

interface OutlinedButtonProps {
    content: string;
    icon?: ReactNode;
    className?: string;
}

const OutlinedButton = ({ content, icon, className = '' }: OutlinedButtonProps) => {
  return (
    <div className={`flex gap-1 items-center justify-center pb-2.5 pt-[5px] md:pt-2.5 border border-white rounded-md font-bold text-white ${className}`}>
        {icon}
        <span className='uppercase'>{content}</span>
    </div>
  )
}

export default OutlinedButton