import ManagementCard from '@/components/atomic/atom/ManagementCard/ManagementCard'
import React from 'react'

type Props = {
  img: string,
  title: string,
  year: string,
  exhaust: string,
  Distance: string,
  cost: string,
}

const page = (props: Props) => {
  return (
    <div className='flex flex-col px-3 py-[15px] gap-3'>
      
      
      <ManagementCard 
      title={'[혼다] 골드윙 1500 (CP450)'} 
      year={'2023년식'} 
      exhaust={'500cc'} 
      date={'2023/01/01'} 
      vehicle={'ADGBNASDUGNSJDGNJIS'} 
      registrationt={'SDSDJGNJSRNGRJKSRJNG'} 
      img={'./assets/img/Rectangle 23.png'} />
      
      <ManagementCard 
      title={'[혼다] 골드윙 1500 (CP450)'} 
      year={'2023년식'} 
      exhaust={'500cc'} 
      date={'2023/01/01'} 
      vehicle={'ADGBNASDUGNSJDGNJIS'} 
      registrationt={'SDSDJGNJSRNGRJKSRJNG'} 
      img={'./assets/img/Rectangle 23.png'} />


    </div>
  )
}

export default page