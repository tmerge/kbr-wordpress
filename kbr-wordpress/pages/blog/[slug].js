import React from 'react'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllPosts, getPostBySlug } from '../../lib/posts'

export default function Post({post}) {
    return (
        <Layout>
            <Container>
                <h1>{post.title}</h1>
                <p>{post.date}</p>
                <p dangerouslySetInnerHTML={{__html: post.content}}></p>
            </Container>
        </Layout>
        
    )
}

export async function getStaticProps({params = {}} = {}){
    const {post} = await getPostBySlug(params?.slug)
    console.log(post)
    return {
        props: {
            post
        }
    }
}
export async function getStaticPaths() {
    const {posts} = await getAllPosts()

    const paths = posts
    .filter(({slug}) => typeof slug === 'string')
    .map(({slug}) => ({
        params: {
            slug,
        }
    }))
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}
