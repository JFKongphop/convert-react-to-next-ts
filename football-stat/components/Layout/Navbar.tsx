import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/favicon.ico' width={70} height={70} alt='logo' />
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/players'>Players</Link>
        </nav>
    )
}

export default Navbar