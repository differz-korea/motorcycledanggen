import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import HomeCard from '../../atom/HomeCard/HomeCard'
import PurchaseTabs from '../../molecule/PurchaseTabs/PurchaseTabs'


type Props = {
}

const Purchase = (props: Props) => {
  return (
    <div className='flex flex-col max-h-[713px]'>
      <PurchaseTabs/>      
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