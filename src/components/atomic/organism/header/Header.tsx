import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='bg-[#0066FF] py-[20.5px] px-[12px] rounded-b-[10px]'>
      <div className='flex flex-row justify-between text-white font-normal text-[16px]'>
        <div className='flex flex-row  gap-2'>
          <p>
            혼다 골드윙 1500
          </p>
          <i className="fa-solid fa-sort-down"></i>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <i className="fa-solid fa-location-dot"></i>
          <p>
            명지동
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header