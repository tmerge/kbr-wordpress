import React from 'react'
import Layout from '../../components/layout'
import Container from '../../components/container'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export default function index({posts}) {
    return (
        <Layout>
            <Container>
                <input className='flex justify-self-center' placeholder='Suche...'></input>
                <h1 className='text-4xl text-center mt-8'>Blog</h1>
                {posts.map(p => {
                    return (
                        <Link href="/blog/[slug]" as={`/blog/${p.slug}`}><p className="my-2" key={p.id}>{p.title}</p></Link>
                    )
                })}
            </Container>
        </Layout>
        
    )
}

export async function getStaticProps() {
    const {posts} = await getAllPosts()
    
    return {
        props: {
            posts
        }
    }
}
