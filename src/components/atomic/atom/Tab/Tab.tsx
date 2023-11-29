import React from 'react'

type Props = {
  status: boolean,
  title:string,
}

const Tab = (props: Props) => {
  return (
    <div className={`flex flex-col items-center text-[14px] ${props.status ? "text-[#0066FF]" : "text-[#B0B0B0]"} ${props.status ? "border-[#0066FF] border-b-[3px]" : ""} pt-[17px] pb-[16px] w-screen font-medium`}>
      {props.title}
    </div>
  )
}

export default Tab