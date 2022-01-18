import Link from 'next/link'
import { useState } from 'react'
import Logo from '../public/images/KBR_Logo.png'
import Image from 'next/image'

export default function Header() {
    const [darkMode, setDarkMode] = useState(false)
    
    return (
        <nav className="top-0 left-0 w-full pr-10 text-gray-500 bg-red-600 xl:pl-6/100 xl:pr-20 xl:fixed dark:bg-gray-800 dark:text-white z-6">
            <div className='menu-desk'>
                <div className='menu-bar'>
                    <div className='w-16 h-5 logo saturate-0'>
                        <Link href="/"><a><Image src={Logo} alt='KBR Logo' aria-label='Startseite' placeholder="blur" /></a></Link>
                    </div>
                    <ul className='flex p-0 m-0 list-none menu-desk-list'>
                        <li className='menu-desk-list-item'>
                            <Link href='/blog'><a className="mr-2">Blog</a></Link>    
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                    <div className="flex items-center flex-shrink-0 uppercase">
                        <Link href='/'><a className="mr-2">Start</a></Link>
                        <Link href='/blog'><a className="mr-2">Blog</a></Link>
                        <Link href='/media'><a className="mr-2">Medienportal</a></Link>
                        <Link href='/politik'><a className="mr-2">Politik</a></Link>
                        <Link href='/about'><a className="mr-2">Über uns</a></Link>
                    </div> 
                </div>
            </div>
        </nav>
    )
}
