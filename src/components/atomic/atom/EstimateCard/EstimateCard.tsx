import React from 'react'

type Props = {
  local:string,
  delivery:string,
  how:string,
  other:string,
  cost:string,
  

}

const EstimateCard = (props: Props) => {
  return (
    <div className='flex flex-col rounded-[5px] shadow-md p-3 gap-2'>
      <div className='flex flex-col gap-3  leading-snug text-[12px] text-[#656565] tracking-tight '>
        <div className='flex flex-row justify-between '>
          <p className='text-[16px] font-bold'>홍길동</p>
          <p className='text-[12px] text-[#656565]'>010-****-**90</p>
        </div>
        <div className='flex flex-row gap-3 '>
          <p>
            지역{' '}
            <span className=' text-[#0066FF] font-bold'>{props.local}</span>
          </p>
          <p>
            용달{' '}
            <span className=' text-[#0066FF] font-bold'>{props.delivery}</span>
          </p>
          <p>
            구매방법{' '}
            <span className=' text-[#0066FF] font-bold'>{props.how}</span>
          </p>
        </div>
        <p>
          기타{' '}
          <span className=' text-[#0066FF] font-bold'>{props.other}</span>
        </p>
      </div>
      <div className='flex flex-col items-end gap-2' >
        <p className='text-[12px]  text-[#656565]'>
          <span className='text-[16px] text-[#0066FF] font-bold'>
          {props.cost}
          </span>{' '}
          원
        </p>
        <button className='w-full border-[1px] border-[#0066FF] rounded-[5px] text-[#0066FF] py-3 text-[16px] font-bold'>
          거래하기
        </button>
      </div>
    </div>
  )
}

export default EstimateCard