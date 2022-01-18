import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Container from '../../components/container'
import Layout from '../../components/layout'

export default function index() {
    
    return (
        <Layout>
            <Container>
                <h1>Medienportal</h1>
                <ReactAudioPlayer src="/audio/podcast.mp3" controls="true" />
            </Container>
        </Layout>
        
    )
}
