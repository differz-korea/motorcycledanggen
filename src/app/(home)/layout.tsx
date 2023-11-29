import Footer from '@/components/atomic/organism/footer/Footer'
import Header from '@/components/atomic/organism/header/Header'
import React from 'react'


type Props = {} & React.PropsWithChildren

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <body className='flex flex-col '>
        <Header />
        {children}
        <Footer />
      </body>
    </>
  )
}

export default HomeLayout