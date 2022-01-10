import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="border-t pt-5 pb-5">
            <div className="menu ml-32 text-gray-500 flex flex-row">
                <p className="mr-2">© {new Date().getFullYear()} KBR |</p>
                <Link href="/impressum"><a className="mr-2">Impressum |</a></Link>
                <Link href="/impressum"><a>Datenschutz</a></Link>
            </div>
        </footer>
            
    )
}
