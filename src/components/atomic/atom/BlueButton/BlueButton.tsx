import React from 'react'

type Props = {
  title:string
}

const BlueButton = (props: Props) => {
  return (
    <button className='text-[14px] text-white bg-[#0066FF] p-2 rounded-[5px]'>
      {props.title}
    </button>
  )
}

export default BlueButton