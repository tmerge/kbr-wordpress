import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
    return ( 
        <Head>
        
        <link rel = "apple-touch-icon"
        sizes = "180x180"
        href = "/favicons/apple-touch-icon.png" />
        
        <link rel = "icon"
        type = "image/png"
        sizes = "32x32"
        href = "/favicons/favicon-32x32.png" />
        
        <link rel = "manifest"
        href = "/favicons/site.webmanifest" / >
        
        <link rel = "mask-icon"
        href = "/favicons/safari-pinned-tab.svg"
        color = "#FF7300" />
        
        <link rel = "shortcut icon"
        href = "/favicons/favicon.ico" / >
        
        <meta name = "msapplication-TileColor"
        content = "#FF7300" / >
        
        <meta name = "msapplication-config"
        content = "/favicon/browserconfig.xml" / >
        
        <meta name = "theme-color"
        content = "#FF7300" / >
    
        <meta name = "description"
        content = {
            `Homepage of KBR.`
        }
        /> 
        <title>KBR</title>
        <meta property = "og:image"
        content = {
            HOME_OG_IMAGE_URL
        }
        /> </Head>
    )
}