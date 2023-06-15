import React from 'react'

interface CalenderTimeProps {
    type: string;
    day: string;
    startTime: string;
    endTime?: string;
}

const CalenderTime = ({ type, day, startTime, endTime }: CalenderTimeProps) => {
  return (
    <div className='flex justify-center items-center gap-2 text-white font-bold mb-[5px] lg:mb-[14px]'>
        <p className='w-2/5 text-left md:text-right text-xs f1 break-normal'>{type}</p>
        <span className='w-1/6 text-13 text-[#949498]'>{day}</span>
        <div className='flex-1 flex'>
			<div className='text-11 md:text-13 px-2.5 py-1 rounded-2xl bg-[#38383f] tracking-wide'>
				{endTime ? `${startTime} - ` : startTime}{endTime}
			</div>
		</div>
    </div>
  )
}

export default CalenderTime