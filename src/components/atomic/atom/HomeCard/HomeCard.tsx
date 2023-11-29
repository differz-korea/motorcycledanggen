import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'

type Props = {
  img:string,
  title:string,
  year:string,
  exhaust:string,
  Distance:string,
  cost:string,
}

const HomeCard = (props: Props) => {
  return (
    <Card className="flex flex-col justify-end relative min-w-[250px] min-h-[200px] bg-no-repeat bg-cover rounded-[5px]" style={{
      backgroundImage: `url('${props.img}')`,
    }} >

      <CardHeader className='absolute bottom-14 right-1'>
        <p className='text-white'>
          {props.title}
        </p>
      </CardHeader>
      <CardBody className='bg-white flex flex-col px-[6px] py-[6px] gap-2 absolute bottom-0 right-0 border-b-[1px] border-r-[1px] border-l-[1px] border-[#C7C7C7] rounded-b-[5px]'>
        <div className='flex flex-row items-center text-[10px] gap-2'>
          <p className='bg-[#0066FF] flex flex-col items-center rounded-[5px] p-1 text-white'>
          {props.year}
          </p>
          <p className='bg-[#0066FF] flex flex-col item-center rounded-[5px] p-1 text-white'>
          {props.exhaust}
          </p>
          <p className='text-[#656565]'>
          {props.Distance}
          </p>
        </div>
        <p className='text-[12px]'>
          평균 낙찰가{` `}
          <span className='inline-flex text-[16px] text-[#0066FF]' >
          {props.cost}
          </span>
        </p>
      </CardBody>
    </Card>
  )
}

export default HomeCard