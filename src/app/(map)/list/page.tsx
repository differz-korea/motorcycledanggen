
import HomeCard from '@/components/atomic/atom/HomeCard/HomeCard'
import SeeLocal from '@/components/atomic/molecule/SeeLocal/SeeLocal'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex  flex-col'>
      <SeeLocal/>
      <div className='flex flex-col px-3 gap-5 '>
      <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 23.png'} />
      <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 23.png'} />
      <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 23.png'} />
      </div>
    </div>
  )
}

export default page