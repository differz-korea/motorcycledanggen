
import Header from '@/components/atomic/organism/header/Header'
import React from 'react'


type Props = {} & React.PropsWithChildren

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <body className='flex flex-col '>
        <Header />
        {children}
        
      </body>
    </>
  )
}

export default HomeLayout