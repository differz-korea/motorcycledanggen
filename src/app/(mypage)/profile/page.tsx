import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col  bg-[#F3F3F3] gap-1 min-h-[740px] '>
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