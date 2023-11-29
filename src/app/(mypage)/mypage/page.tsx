import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col bg-[#F3F3F3] gap-1 min-h-[740px]'>
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