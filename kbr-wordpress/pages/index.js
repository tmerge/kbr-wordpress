import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/container'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Logo from '../public/images/KBR_Logo.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`text-red ${darkMode && "dark"}`}>
      <Layout >
        <Head>
          <title>KBR</title>
        </Head>
        <Container>
          <p className="dark:text-white text-red-600">Does darkmode works?</p>
          <Image src={Logo} alt="KBR Logo" width="400" height="200" placeholder="blur"/>
          <label className="switch">
            <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label> 
        </Container>
      </Layout>
    </div>
  )
}
