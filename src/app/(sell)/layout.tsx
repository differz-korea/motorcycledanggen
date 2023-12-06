

import React from 'react'


type Props = {} & React.PropsWithChildren

const Layout = ({ children }: Props) => {
  return (
    <>
      <body className='flex flex-col '>
        
        {children}
        
      </body>
    </>
  )
}

export default Layout