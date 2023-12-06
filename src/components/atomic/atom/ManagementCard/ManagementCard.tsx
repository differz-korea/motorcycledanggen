import React from 'react'

type Props = {
  
  title:string,
  year:string,
  exhaust:string,
  date:string,
  img:string,
  vehicle:string,
  registrationt:string,
}

const ManagementCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-end relative min-w-[250px] min-h-[200px] bg-no-repeat bg-cover rounded-[5px]" style={{
      backgroundImage: `url('${props.img}')`,
    }} >
      <i className="fa-regular fa-xmark-large absolute top-3 right-3 text-white"></i>
      <div className='absolute top-20 left-2'>
        <p className='text-white'>
          {props.title}
        </p>
      </div>
      <div className='bg-white flex flex-col px-[6px] py-[6px] gap-2 absolute bottom-0 right-0 border-b-[1px] border-r-[1px] border-l-[1px] border-[#C7C7C7] rounded-b-[5px] w-full leading-tight '>
        <div className='flex flex-row items-center text-[10px] gap-2'>
          <p className='bg-[#0066FF] flex flex-col items-center rounded-[5px] p-1 text-white relative'>
            {props.year}년식
          </p>
          <p className='bg-[#0066FF] flex flex-col item-center rounded-[5px] p-1 text-white'>
            {props.exhaust}
          </p>
          <p className='text-[#656565]'>
            {props.date}
          </p>
          <i className="fa-light fa-pen-line absolute text-[17.78px] top-2 right-2"></i>
        </div>
        <p className='text-[14px] font-medium'>
          차대번호{` `}
          <span className='inline-flex text-[16px] text-[#0066FF]' >
            {props.vehicle}
          </span>
        </p>
        <p className='text-[14px] font-medium'>
          등록번호{` `}
          <span className='inline-flex text-[16px] text-[#0066FF]' >
            {props.registrationt}
          </span>
        </p>
      </div>
    </div>
  )
}

export default ManagementCard