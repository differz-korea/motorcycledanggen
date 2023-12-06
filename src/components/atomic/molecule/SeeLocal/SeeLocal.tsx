import React from 'react'
import BlueButton from '../../atom/BlueButton/BlueButton'

type Props = {}

const SeeLocal = (props: Props) => {
  return (
    <div className='flex flex-row justify-between px-3 py-[15px]'>
      <BlueButton title={'지도보기'}/>
      <BlueButton title={'필터'}/>
    </div>
  )
}

export default SeeLocal