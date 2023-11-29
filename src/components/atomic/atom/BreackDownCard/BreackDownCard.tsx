import React from 'react'

type Props = {
  status:boolean,
  title:string,
  location:string,
  distance:string,
  satis:string,
  review:string,
  cost:string,

}

const BreackDownCard = (props: Props) => {
  return (
    <div className='flex flex-col items-start text-[12px] gap-2 shadow-md rounded-[10px] p-4'>
      <div className={`text-[14px] text-white ${props.status ? "bg-[#0066FF]" : "bg-[#FFC700]" }  p-2 rounded-[5px]`}>
        {props.status ? "수리 완료" : "수리 요청됨" }
      </div>
      <div className='flex flex-col gap-1 text-[#656565] relative w-full'>
        <p className='text-[16px] text-black font-semibold'>
          {props.title}
        </p>
        <p>
          {props.location}{' '}
          <span className='text-[#0066FF] font-semibold'>{props.distance}이내</span>
        </p>
        <div className='flex flex-row gap-1'>
          <p>
            만족도{' '}
            <span className='text-[#0066FF] font-semibold'>{props.satis}</span>
          </p>
          <p>
            후기{' '}
            <span className='text-[#0066FF] font-semibold'>{props.review}</span>
          </p>
        </div>
        <i className="fa-light fa-angle-right absolute top-0 right-0 text-[19.2px]"></i>
      </div>
      <div className='flex flex-row justify-between w-full '>
        <p>
          보험 수리
        </p>
        <p>
          <span className='text-[16px] text-[#0066FF] font-semibold'>
          {props.cost}
          </span>{' '}
          원
        </p>
      </div>
    </div>
  )
}

export default BreackDownCard