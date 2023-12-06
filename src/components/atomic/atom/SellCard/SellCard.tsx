import React from 'react'

type Props = {
  title:string,
  subtitle:string,
  img:string
}

const SellCard = (props: Props) => {
  return (
    <button className='bg-white flex flex-col w-full p-[16px] rounded-[10px] text-start leading-tight min-h-[150px] gap-1 relative'>
      <p className='text-[16px] font-bold'>
        {props.title}
      </p>
      <p className='text-[12px] text-[#656565]'>
        {props.subtitle}
      </p>
      <img src={props.img} alt="" className=' absolute bottom-4 right-4' />
    </button>
  )
}

export default SellCard