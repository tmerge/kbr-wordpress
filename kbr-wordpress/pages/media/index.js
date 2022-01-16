import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Layout from '../../components/layout'

export default function index() {
    
    return (
        <Layout>
            <h1>Medienportal</h1>
            <ReactAudioPlayer src="/audio/podcast.mp3" controls="true" />
        </Layout>
        
    )
}
