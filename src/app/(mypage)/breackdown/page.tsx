import BreackDownCard from '@/components/atomic/atom/BreackDownCard/BreackDownCard'
import Profile from '@/components/atomic/atom/Profile/Profile'
import BreackDownTabs from '@/components/atomic/molecule/BreackDownTabs/BreackDownTabs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col  bg-[#F3F3F3] gap-3 min-h-[740px] '>
      <Profile />
      <div className='flex flex-col  bg-white'>
        <p className='p-3 text-[] font-bold'>
          수리내역
        </p>
        <BreackDownTabs />
        <div className=' flex flex-col gap-5 p-3'>

          <BreackDownCard status={false} title={'잘 고치는 정비소'} location={'강서구 명지동'} distance={'1.2km'} satis={'99%'} review={'92'} cost={'1,200,000'} />
          <BreackDownCard status={true} title={'잘 고치는 정비소'} location={'강서구 명지동'} distance={'1.2km'} satis={'99%'} review={'92'} cost={'1,200,000'} />

        </div>
      </div>

    </div>
  )
}

export default page