import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/container'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Logo from '../public/images/KBR_Logo.png'

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>KBR</title>
        </Head>
        <Container>
          <Image src={Logo} alt="KBR Logo" width="400" height="200" placeholder="blur"/>
        </Container>
      </Layout>
    </>
  )
}
