import Footer from '@/components/atomic/organism/footer/Footer'

import React from 'react'


type Props = {} & React.PropsWithChildren

const Layout = ({ children }: Props) => {
  return (
    <>
      <body className='flex flex-col '>
        
        {children}
        <Footer/>
      </body>
    </>
  )
}

export default Layout