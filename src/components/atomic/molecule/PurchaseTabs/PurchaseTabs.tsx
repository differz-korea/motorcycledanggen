import React from 'react'
import Tab from '../../atom/Tab/Tab'

type Props = {}

const PurchaseTabs = (props: Props) => {
  return (
    <div className='flex flex-row items-center justify-center'>
      <Tab status={true} title={'구매'} />
      <Tab status={false} title={'판매'} />
    </div>
  )
}

export default PurchaseTabs