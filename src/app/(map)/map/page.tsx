import SeeList from '@/components/atomic/molecule/SeeList/SeeList'

import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col justify-between  h-screen w-screen absolute'>
      <SeeList/>
      <div className='bg-white flex flex-row m-3 p-2 gap-3 rounded-[4px]'>
        <img src="./assets/img/Rectangle 6.png" alt="" className='h-[80px]' />
        <div className=' flex flex-col w-full text-[12px] gap-2  leading-tight'>
          <div className='flex flex-col gap-1'>
            <p className='text-[14px] font-bold'>[혼다] 골드윙 1500 (CP450)</p>
            <div className='flex flex-row gap-2 text-[10px] text-white  '>
              <p className='bg-[#0066FF] p-1 rounded-[5px]'>2023년식</p>
              <p className='bg-[#0066FF] p-1 rounded-[5px]'>500cc</p>
            </div>
            <p className='text-[#0066FF] font-bold'>1.2km이내</p>
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <p className=''>
              평균 판매가
            </p>
            <p>
              <span className='text-[16px] text-[#0066FF] font-bold'>
                1,200,000
              </span>{' '}
              원
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page