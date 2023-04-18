import React, { ReactNode } from 'react'
import AsideMenu from '../AsideMenu/AsideMenu'
import Background from '../Background/Background'
import MobileMenu from '../MobileMenu/MobileMenu'


interface LayoutProps {
  children : ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
    <>
    
    <AsideMenu/>
      <MobileMenu />
      <Background/>
        <main>
          
            {children}
        </main>
    </>
  )
}

export default Layout