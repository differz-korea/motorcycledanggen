import EstimateCard from '@/components/atomic/atom/EstimateCard/EstimateCard'
import Profile from '@/components/atomic/atom/Profile/Profile'
import SendCard from '@/components/atomic/atom/SendCard/SendCard'
import EstimateTabs from '@/components/atomic/molecule/EstimateTabs/EstimateTabs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col  bg-[#F3F3F3] gap-3 min-h-[740px] '>
      <Profile />
      <div className='flex flex-col  bg-white'>
        <p className='p-3 text-[] font-bold'>
          보낸 견적함
        </p>
        <EstimateTabs />
        <div className=' flex flex-col gap-5 p-3'>
          
          <SendCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000'}/>
          <SendCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,600km 주행'} cost={'1,050,000'}/>
        </div>
      </div>

    </div>
  )
}

export default page