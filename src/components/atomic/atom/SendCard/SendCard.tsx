import React from 'react'

type Props = {
  title:string,
  year:string,
  exhaust:string,
  Distance:string,
  cost:string,

}

const SendCard = (props: Props) => {
  return (
    <div className='flex flex-col rounded-[5px] shadow-md p-3 gap-2'>
      <div className='flex flex-col gap-2  leading-snug text-[12px] text-[#656565] tracking-tight '>
        <p className='text-[16px] font-bold'>{props.title}</p>
        <div className='flex flex-row items-center gap-3 '>
          <p className='bg-[#0066FF] text-white p-1 rounded-[5px]'>
            {props.year}
          </p>
          <p className='bg-[#0066FF] text-white p-1 rounded-[5px]'>
            {props.exhaust}
          </p>
          <p>
            {props.Distance} 주행
          </p>
        </div>
      </div>
      <div className='flex flex-col items-end gap-2' >
        <p className='text-[12px]  text-[#656565]'>
          <span className='text-[16px] text-[#0066FF] font-bold'>
            {props.cost}
          </span>{' '}
          원
        </p>
        <button className='w-full border-[1px] border-[#0066FF] rounded-[5px] text-[#0066FF] py-3 text-[16px] font-bold'>
          거래취소
        </button>
      </div>
    </div>
  )
}

export default SendCard