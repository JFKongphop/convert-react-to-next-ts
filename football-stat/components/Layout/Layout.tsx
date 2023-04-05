import { LayoutProps } from '@/models/layout'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout