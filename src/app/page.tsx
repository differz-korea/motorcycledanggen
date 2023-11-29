import FirstButtons from '@/components/atomic/molecule/FirstPage/FirstButtons'

import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col items-center bg-[#0066FF] w-screen h-screen px-3'>
      <div className='flex flex-col  py-[100px] w-full gap-5'>
        <h5 className=' text-white font-light'>
          회원님께 맞는 서비스를 선택해주세요!
        </h5>
        <FirstButtons/>
      </div>
    </div>
  )
}

export default page