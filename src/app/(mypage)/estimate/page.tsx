import EstimateCard from '@/components/atomic/atom/EstimateCard/EstimateCard'
import Profile from '@/components/atomic/atom/Profile/Profile'
import EstimateTabs from '@/components/atomic/molecule/EstimateTabs/EstimateTabs'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import React from 'react'

type Props = {
  status1: boolean,
  status2: boolean,
  status3: boolean,
}

const page = (props: Props) => {
  return (
    <div className='flex flex-col  bg-[#F3F3F3] gap-3 min-h-[740px] '>
      <Profile/>
      <div className='flex flex-col  bg-white'>
        <p className='p-3 text-[] font-bold'>
          받은 견적함
        </p>
        <EstimateTabs/>
        <div className=' flex flex-col gap-5 p-3'>
          <EstimateCard local={'부산'} delivery={'포함'} how={'현금'} other={'오토바이가 깨끗하네요'} cost={'90,000,000'} />
          <EstimateCard local={'부산'} delivery={'포함'} how={'현금'} other={'오토바이가 깨끗하네요, 하지만 수리 경력이 조금 걸려요'} cost={'86,000,000'} />
        </div>
      </div>

    </div>

  )
}

export default page