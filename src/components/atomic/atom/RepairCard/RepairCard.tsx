import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

type Props = {
  image:string,
  title:string,
  group:string,
  explane:string,
  Distance:string
}

const RepairCard = (props: Props) => {
  return (
    <Card className='flex flex-col gap-[13px]'>
      <CardHeader className='flex flex-col  p-0'>
        <Image
          src={props.image}
        />
      </CardHeader>
      <CardBody className='flex flex-col gap-1 p-0'>
        <p className=' inline text-[14px] font-semibold'>
          {props.title}{' '}
          <span className='text-[10px] text-[#656565]'>
          {props.group}
          </span>
        </p>
        <p className='text-[10px] text-[#656565] line-clamp-2'>
        {props.explane}
        </p>
        <p className='text-[12px] text-[#0066FF] font-medium'>
        {props.Distance}이내
        </p>
      </CardBody>
    </Card>
  )
}

export default RepairCard