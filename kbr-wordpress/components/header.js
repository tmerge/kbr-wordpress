import Link from 'next/link'

export default function Header() {
    return (
        <nav className="bg-white text-gray-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center uppercase">
                        <Link href='/'><a className="mr-2">Start |</a></Link>
                        <Link href='/blog'><a className="mr-2">Blog |</a></Link>
                        <Link href='/media'><a className="mr-2">Medienportal |</a></Link>
                        <Link href='/politik'><a className="mr-2">Politik |</a></Link>
                        <Link href='/about'><a className="mr-2">Über uns </a></Link>
                    </div>  
                </div>
            </div>
        </nav>
    )
}
