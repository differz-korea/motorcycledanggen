import Link from 'next/link'
import React from 'react'
import FooterNav from '../../atom/Footer/FooterNav'

type Props = {
}

const Footer = (props: Props) => {
  return (
    <div className='sticky bottom-0 bg-white flex flex-row justify-between items-end px-3 pt-[10px] pb-[8px] text-[10px] w-pull border-t-[1px] border-[#C7C7C7] h-[60px]'>
      <FooterNav status={false} title={'구매/판매'} icon={'fa-light fa-hands-holding-dollar'} link={''}/>
      <FooterNav status={false} title={'수리'} icon={'fa-light fa-wrench'} link={''}/>
      <FooterNav status={true} title={'홈'} icon={'fa-light fa-house-blank'} link={''}/>
      <FooterNav status={false} title={'커뮤니티'} icon={'fa-light fa-users'} link={''}/>
      <FooterNav status={false} title={'마이페이지'} icon={'fa-light fa-user'} link={''}/>
    </div>
  )
}

export default Footer