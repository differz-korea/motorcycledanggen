import Profile from '@/components/atomic/atom/Profile/Profile'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col bg-[#F3F3F3] gap-1 min-h-[740px]'>
      <Profile/>
      <button className='bg-white text-[16px] flex flex-row items-center justify-between p-3'>
        <p className=' font-medium'>
          프로필 수정
        </p>
        <i className="fa-light fa-angle-right text-[#C7C7C7]"></i>
      </button>
      <button className='bg-white text-[16px] flex flex-row items-center justify-between p-3'>
        <p className=' font-medium'>
          받은 견적함
        </p>
        <i className="fa-light fa-angle-right text-[#C7C7C7]"></i>
      </button>
      <button className='bg-white text-[16px] flex flex-row items-center justify-between p-3'>
        <p className=' font-medium'>
          보낸 견적함
        </p>
        <i className="fa-light fa-angle-right text-[#C7C7C7]"></i>
      </button>
      <button className='bg-white text-[16px] flex flex-row items-center justify-between p-3'>
        <p className=' font-medium'>
          수리 내역
        </p>
        <i className="fa-light fa-angle-right text-[#C7C7C7]"></i>
      </button>

    </div>
  )
}

export default page