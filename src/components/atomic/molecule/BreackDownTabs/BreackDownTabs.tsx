import React from 'react'
import Tab from '../../atom/Tab/Tab'

type Props = {}

const BreackDownTabs = (props: Props) => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <Tab status={true} title={'전체'} />
      <Tab status={false} title={'수리완료'} />
    </div>
  )
}

export default BreackDownTabs