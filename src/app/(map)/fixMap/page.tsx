import SeeList from '@/components/atomic/molecule/SeeList/SeeList'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col justify-between  h-screen w-screen absolute'>
      <SeeList />
      <div className='bg-white flex flex-row m-3 p-2 gap-3 rounded-[4px]'>
        <img src="./assets/img/Rectangle 3.png" alt="" className='h-[80px]' />
        <div className=' flex flex-col justify-between w-full text-[10px] gap-2  leading-tight'>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row items-baseline gap-1'>
              <p className='text-[14px] font-bold'>잘 고치는 정비소</p>
              <p className='text-[#656565] '>정비소</p>
            </div>
            <p className='text-[#656565] line-clamp-2'>안녕하세요, 바이크 열정을 함께하는 곳, 바이크메카입니다. 우리는 오토바이를 사랑하며, 그 안에 담긴 자유로움과 스릴을 믿고 정비하는 전문 정비소입니다. 고객 여러분께서 안심하고 바이크를 즐길 수 있도록 최상의 서비스를 제공하고자 노력하고 있습니다.</p>
          </div>
          <p className=' text-[12px] text-[#0066FF] font-bold pb-[3px]'>1.2km이내</p>
        </div>
      </div>
    </div>
  )
}

export default page