import SellCard from '@/components/atomic/atom/SellCard/SellCard'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col justify-center bg-[#0066FF] min-h-screen w-screen px-3 '>
      <div className='flex flex-col gap-5 w-full '>
        <p className='text-[16px] text-white '>
          판매할 이륜차를 선택해주세요!
        </p>
        <div className='flex flex-row gap-5 w-full pb-[35.5px]'>
          
          <SellCard title={'등록된 이륜차 불러오기'} subtitle={'내가 등록했던 이륜차 판매하기'} img={'./assets/img/list.png'}/>
          
          <SellCard title={'새로 입력하기'} subtitle={'등록 안된 이륜차 빠르게 판매하기'} img={'./assets/img/id-card.png'}/>
        </div>
      </div>
    </div>
  )
}

export default page