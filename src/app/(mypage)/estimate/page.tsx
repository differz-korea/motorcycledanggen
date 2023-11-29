import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import React from 'react'

type Props = {
  status: boolean
}

const page = (props: Props) => {
  return (
    <div className='flex flex-col  bg-[#F3F3F3] gap-3 min-h-[740px] '>
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
      <div className='flex flex-col  bg-white'>
        <p className='p-3 text-[] font-bold'>
          받은 견적함
        </p>
        <div className='flex flex-row items-center justify-center'>
          <div className={`flex flex-col items-center text-[14px] ${props.status ? "text-[#B0B0B0]" : "text-[#0066FF]"} ${props.status ? "" : "border-[#0066FF] border-b-[3px]"} pt-[17px] pb-[16px] w-screen font-medium`}>
            전체
          </div>
          <div className={`flex flex-col items-center text-[14px] ${props.status ? "text-[#0066FF]" : "text-[#B0B0B0]"} ${props.status ? "border-[#0066FF] border-b-[3px]" : ""} pt-[17px] pb-[16px] w-screen font-medium`}>
            거래완료
          </div>
          <div className={`flex flex-col items-center text-[14px] ${props.status ? "text-[#0066FF]" : "text-[#B0B0B0]"} ${props.status ? "border-[#0066FF] border-b-[3px]" : ""} pt-[17px] pb-[16px] w-screen font-medium`}>
            거래대기
          </div>
        </div>
        <div className='p-3'>
          <div className='flex flex-col '>

            <div className='flex flex-col gap-3  leading-snug'>
              <div className='flex flex-row justify-between '>
                <p className='text-[16px] font-bold'>홍길동</p>
                <p className='text-[12px] text-[#656565]'>010-****-**90</p>
              </div>
              <div className='flex flex-row gap-3'>
                <p className='text-[12px]'>
                  지역{' '}
                  <span className='text-[12px] text-[#0066FF] font-bold'>부산</span>
                </p>
                <p className='text-[12px]'>
                  용달{' '}
                  <span className='text-[12px] text-[#0066FF] font-bold'>포함</span>
                </p>
                <p className='text-[12px]'>
                  구매방법{' '}
                  <span className='text-[12px] text-[#0066FF] font-bold'>현금</span>
                </p>
              </div>
              <p className='text-[12px]'>
                기타{' '}
                <span className='text-[12px] text-[#0066FF] font-bold'>오토바이가 깨끗하네요</span>
              </p>
            </div>

            <div className='flex flex-col items-end' >
              <p>
                <span>
                90,000,000
                </span>
                원
              </p>
              <button>
              거래하기
              </button>
            </div>
          </div>



        </div>
      </div>

    </div>

  )
}

export default page