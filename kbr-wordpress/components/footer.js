import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="border-t pt-5 pb-5 text-gray-500 dark:bg-gray-800 dark:text-white">
            <div className="menu sm:ml-32 text-center block sm:flex sm:flex-row">
                <p className="mr-2">© {new Date().getFullYear()} KBR |</p>
                <Link href="/impressum"><a className="mr-2">Impressum |</a></Link>
                <Link href="/impressum"><a>Datenschutz</a></Link>
            </div>
        </footer>
            
    )
}
