import React from 'react'
import BlueButton from '../../atom/BlueButton/BlueButton'

type Props = {}

const SeeList = (props: Props) => {
  return (
    <div className='flex flex-row justify-between px-3 py-[15px] relative top-[60px] right-0'>
      <BlueButton title={'목록보기'}/>
      <BlueButton title={'필터'}/>
    </div>
  )
}

export default SeeList