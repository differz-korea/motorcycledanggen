import React from 'react'
import Tab from '../../atom/Tab/Tab'

type Props = {}

const EstimateTabs = (props: Props) => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <Tab status={true} title={'전체'} />
      <Tab status={false} title={'거래완료'} />
      <Tab status={false} title={'거래대기'} />
    </div>
  )
}

export default EstimateTabs