import RepairCard from '@/components/atomic/atom/RepairCard/RepairCard'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" flex flex-col ">
      <div className='flex flex-col   bg-[#B8D4FF] px-[24px] justify-between gap-[24px] pb-[20.38px] shadow-[0_0px_4px_-15px_rgba(0,0,0,0.3)]'>
        <div className='flex flex-col gap-2 '>
          <p className='text-[10px] text-[#0066FF] '>
            #이륜차 #고장났을때
          </p>
          <p className='text-[20px] ' >
            빠르고 쉬운 이륜차 수리, <br />
            배추딜러에서 시작하세요!
          </p>
        </div>
        <div className='flex flex-row  items-end justify-between '>
          <button className='bg-[#0066FF] text-white px-3 py-2 rounded-[5px] text-[12px] font-light'>
            최저가 견적받기
          </button>
          <img src="/assets/img/rider.png" alt="" />
        </div>
      </div>
      <div className=' flex flex-col px-3 pt-[21px] pb-[67px] gap-3  w-full'>
        <p>
          내 근처 수리점
        </p>

        <RepairCard title={'잘 고치는 정비소'} group={'정비소'} explane={'안녕하세요, 바이크 열정을 함께하는 곳, 바이크메카입니다. 우리는 오토바이를 사랑하며, 그 안에 담긴 자유로움과 스릴을 믿고 정비하는 전문 정비소입니다. 고객 여러분께서 안심하고 바이크를 즐길 수 있도록 최상의 서비스를 제공하고자 노력하고 있습니다.'} Distance={'1.2km'} image={'/assets/img/Rectangle 8.png'}/>
        <RepairCard title={'바이크메카'} group={'오토바이 정비소'} explane={'안녕하세요, 바이크 열정을 함께하는 곳, 바이크메카입니다. 우리는 오토바이를 사랑하며, 그 안에 담긴 자유로움과 스릴을 믿고 정비하는 전문 정비소입니다. 고객 여러분께서 안심하고 바이크를 즐길 수 있도록 최상의 서비스를 제공하고자 노력하고 있습니다.'} Distance={'2.6km'} image={'/assets/img/Rectangle 9.png'}/>
      </div>
    </div>
  )
}

export default page