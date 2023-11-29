import React from 'react'
import Link from 'next/link'

type Props = {
  status:boolean
  title:string
  icon:string
  link:string
}

const FooterNav = (props: Props) => {
  return (
    <Link href={props.link} className={`flex flex-col items-center gap-[6px] w-pull ${props.status ? "text-[#0066FF]" : "text-black"}`} >
      <i className={`${props.icon} text-[24px] `}></i>
      <p>{props.title}</p>
    </Link>
  )
}

export default FooterNav