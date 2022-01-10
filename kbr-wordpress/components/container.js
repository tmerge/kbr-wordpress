import React from 'react'


export default function Container({children}) {
    


    return (
        <div className="container min-h-screen mx-auto dark:bg-gray-800 dark:text-white">
            {children}
        </div>
    )
}
