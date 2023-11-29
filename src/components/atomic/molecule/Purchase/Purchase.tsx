import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import HomeCard from '../../atom/HomeCard/HomeCard'


type Props = {
  status: boolean
}

const Purchase = (props: Props) => {
  return (
    <div className='flex flex-col max-h-[713px]'>
      <div className='flex flex-row items-center justify-center'>
        <div className={`flex flex-col items-center text-[14px] ${props.status ? "text-[#B0B0B0]" : "text-[#0066FF]"} ${props.status ? "" : "border-[#0066FF] border-b-[3px]"} pt-[17px] pb-[16px] w-screen font-medium`}>
          구매
        </div>
        <div className={`flex flex-col items-center text-[14px] ${props.status ? "text-[#0066FF]" : "text-[#B0B0B0]"} ${props.status ? "border-[#0066FF] border-b-[3px]" : ""} pt-[17px] pb-[16px] w-screen font-medium`}>
          판매
        </div>
      </div>
      <div className='flex flex-col overflow-scroll scrollbar-hide scroll-smooth p-3 gap-5'>
        <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 23.png'} />
        <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 23.png'} />
        <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 23.png'} />
        <HomeCard title={'[혼다] 골드윙 1500 (CP450)'} year={'2023년식'} exhaust={'500cc'} Distance={'1,200km 주행'} cost={'1,200,000원'} img={'./assets/img/Rectangle 23.png'} />
      </div>
    </div>
  )
}

export default Purchase