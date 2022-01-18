import  {React, useEffect, useState} from 'react'
import { PlayIcon, PauseIcon, BriefcaseIcon, BeakerIcon } from '@heroicons/react/solid'

export default function Audioplayer(audioElement) {
    const [playing, setPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [speed, setSpeed] = useState(1)
    const [muted, setMuted] = useState(false)  

    // toggle play
    const togglePlay = () => {
      setPlaying({...playing, playing: !playing})
    }

    useEffect(()=> {
      console.log(playing)
      playing 
      ? audioElement.current.play() 
      : audioElement.current.pause()
    }, [playing, audioElement])

    // handle time update while playing
    const handleOnTimeUpdate = () => {
      const progress = (audioElement.current.currentTime / audioElement.current.duration) * 100
      setProgress({progress: progress})
    }

    const handleAudioProgress = (event) => {
      const manualChange = Number(event.target.value)
      audioElement.current.currentTime = ((audioElement.current.duration / 100) * manualChange)
      setProgress({progress: progress})    
    }

    // handle audio speed
    const handleAudioSpeed = (event) => {
      const speed = Number(event.target.value)
      setSpeed({speed: speed})
    }

    const toggleMute = () => {
      console.log(muted)
      setMuted({...muted, muted: !muted})
    }

    useEffect(() => {
      muted
      ? (audioElement.current.muted = true)
      : (audioElement.current.muted = false)
    }, [muted, audioElement])

    return (
      <>
      <button className="w-20 h-10" onClick={() => {setTest(!test); console.log(test)}}></button>
      <div className="flex mb-8 w-100 bg-kbr-orange">
          <audio
            src="/audio/podcast.mp3"
            onTimeUpdate={handleOnTimeUpdate}
          />
          <div className="flex">
            <div className="w-44 actions">
                {!playing ? (
                  <PlayIcon onClick={togglePlay}/>
                ) : (
                  <PauseIcon onClick={togglePlay} />
                )}
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => handleAudioProgress(e)}
            />
            <select
              className="velocity"
              value={speed}
              onChange={(e) => handleAudioSpeed(e)}
            >
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
              {!muted ? (
                <BriefcaseIcon onClick={toggleMute} />
              ) : (
                <BeakerIcon onClick={toggleMute} />
              )}
          </div>
        </div>
      </>
    )
}
