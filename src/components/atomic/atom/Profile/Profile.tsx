import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='flex flex-row items-center gap-5 px-3 py-5 bg-white'>
      <img src="/assets/img/Ellipse 4.png" alt="" className=' rounded-full' />
      <div className='flex flex-col text-[20px] gap-2'>
        <p className='font-bold'>
          바이크마스터5000
        </p>
        <div className='flex flex-row text-[14px] gap-5'>
          <p>구매 <span className='text-[18px] text-[#0066FF] font-medium'>10회</span> </p>
          <p>판매 <span className='text-[18px] text-[#0066FF] font-medium'>5회</span> </p>
        </div>
      </div>
    </div>
  )
}

export default Profile