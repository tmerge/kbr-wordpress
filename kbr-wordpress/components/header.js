import { Link } from 'next/link'

export default function Header() {
    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        Start
                    </div>  
                </div>
            </div>
        </nav>
    )
}
