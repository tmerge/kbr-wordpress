import React from 'react'
import Meta from './meta'
import Footer from './footer'
import Header from './header'

export default function Layout({children}) {
    return (
        <>
            <Meta />
            <Header />
               <main>{children}</main>
            <Footer />
        </>
    )
}