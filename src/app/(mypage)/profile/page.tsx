import Profile from '@/components/atomic/atom/Profile/Profile'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col  bg-[#F3F3F3] gap-1 min-h-[740px] '>
      <Profile/>
      <div className='flex flex-col items-center gap-3 p-3 text-[16px]'>
        <button className='bg-[#0066FF] text-white py-3 rounded-[5px] w-full'>
          닉네임 수정
        </button>
        <button className='border-[#0066FF] text-[#0066FF] border-[1px] py-3 rounded-[5px] w-full'>
        전화번호 변경
        </button>
        <p className='text-[12px] text-[#656565]'>카카오톡으로 가입됨</p>
      </div>
    </div>
  )
}

export default page