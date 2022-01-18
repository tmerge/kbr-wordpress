import React from 'react'


export default function Container({children}) {
    


    return (
        <div className="min-h-screen pl-4 pr-4 mx-auto mt-4 overflow-hidden xl:pl-32 xl:pr-32 container-fluid dark:bg-gray-800 dark:text-white">
            {children}
        </div>
    )
}
