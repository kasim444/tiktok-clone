import React, { useRef, useState } from 'react'
import { VideoFooter } from '../../components'
import './Video.css'

function Video() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className='video'>
      <video
        ref={videoRef}
        onClick={handleVideoPress}
        className='video__player'
        loop
        src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'></video>
      <VideoFooter />
    </div>
  )
}

export default Video
