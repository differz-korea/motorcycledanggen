import RepairCard from '@/components/atomic/atom/RepairCard/RepairCard'
import SeeLocal from '@/components/atomic/molecule/SeeLocal/SeeLocal'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex  flex-col'>
      <SeeLocal/>
      <div className='flex flex-col px-3 gap-3'>
        <RepairCard
          title={'잘 고치는 정비소'}
          group={'정비소'}
          explane={'안녕하세요, 바이크 열정을 함께하는 곳, 바이크메카입니다. 우리는 오토바이를 사랑하며, 그 안에 담긴 자유로움과 스릴을 믿고 정비하는 전문 정비소입니다. 고객 여러분께서 안심하고 바이크를 즐길 수 있도록 최상의 서비스를 제공하고자 노력하고 있습니다.'}
          Distance={'1.2km'}
          image={'/assets/img/Rectangle 8.png'} />
        <RepairCard
          title={'바이크메카'}
          group={'오토바이 정비소'}
          explane={'안녕하세요, 바이크 열정을 함께하는 곳, 바이크메카입니다. 우리는 오토바이를 사랑하며, 그 안에 담긴 자유로움과 스릴을 믿고 정비하는 전문 정비소입니다. 고객 여러분께서 안심하고 바이크를 즐길 수 있도록 최상의 서비스를 제공하고자 노력하고 있습니다.'}
          Distance={'2.6km'}
          image={'/assets/img/Rectangle 9.png'} />
        <RepairCard
          title={'바이크메카'}
          group={'오토바이 정비소'}
          explane={'안녕하세요, 바이크 열정을 함께하는 곳, 바이크메카입니다. 우리는 오토바이를 사랑하며, 그 안에 담긴 자유로움과 스릴을 믿고 정비하는 전문 정비소입니다. 고객 여러분께서 안심하고 바이크를 즐길 수 있도록 최상의 서비스를 제공하고자 노력하고 있습니다.'}
          Distance={'2.6km'}
          image={'/assets/img/Rectangle 9.png'} />
      </div>
    </div>
  )
}

export default page