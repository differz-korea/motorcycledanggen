import React from 'react'
import { Card, CardHeader, CardBody, Link, Image } from "@nextui-org/react";

type Props = {
  title: string
  subtitle: string
  subtitle2: string
  img: string
  alt: string
  height: boolean
}

const FirstpageButton = (props: Props) => {
  return (
    <Card className={`flex flex-col bg-white w-full rounded-[10px] ${props.height ? "h-[150px]" : ""}   relative`}>
      <CardHeader className='flex flex-col items-start'>
        <p className=' font-bold'>
          {props.title}
        </p>
        <h2 className='text-left text-[12px] text-[#656565] font-normal inline'>
          {props.subtitle} <br /> {props.subtitle2}
        </h2>
      </CardHeader>
      <CardBody className='flex flex-row w-full justify-end absolute bottom-0 right-0'>
        <Image
          alt={props.alt}
          src={props.img}
        />
      </CardBody>
    </Card>
  )
}

export default FirstpageButton