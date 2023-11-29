import HomeCard from '@/components/atomic/atom/HomeCard/HomeCard'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col items-center px-4 pt-6 pb-[48px] gap-10 '>
      <div className='flex flex-col w-full gap-6 '>
        <div className='flex flex-col items-start w-full gap-4'>
          <h1 className=' font-semibold'>
            내 이륜차 예상시세
          </h1>
          <h2 className='text-[22px] text-[#0066FF] font-bold'>
            300만원 ~ 400만원
          </h2>
        </div>
        <div className='bg-black'>
          graf
        </div>
      </div>
      <div className='flex flex-col w-full gap-10'>
        <div className='flex flex-col w-full gap-3'>
          <p className='text-[14px] font-semibold'>커뮤니티 인기글</p>
          <div className='flex overflow-scroll scrollbar-hide scroll-smooth gap-3 '>
            <img src="/assets/img/Rectangle 10.png" alt="" />
            <img src="/assets/img/Rectangle 11.png" alt="" />
            <img src="/assets/img/Rectangle 11.png" alt="" />
          </div>
        </div>
        <div className='flex flex-col w-full gap-3'>
          <p className='text-[14px] font-semibold'>배추딜러 추천 상품</p>
          <div className='flex overflow-scroll scrollbar-hide scroll-smooth gap-3 '>

            <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 13.png'} />
            <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 13.png'} />
          </div>
        </div>
      </div>
      <button className='border-[1px] border-[#0066FF] rounded-[5px] text-[#0066FF] font-semibold py-3 w-full'>
        지금 바로 견적 신청하기
      </button>
    </div>
  )
}

export default page