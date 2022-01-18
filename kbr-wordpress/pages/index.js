import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/Layout'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
    <div className=''></div>
    <div className={`text-red ${darkMode && "dark"}`}>
      <Layout >
        <Container>
          <p className="text-red-600 dark:text-white">Does darkmode works?</p>
          
          <label className="switch">
            <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label> 
        </Container>
      </Layout>
    </div>
    </>
  )
}
