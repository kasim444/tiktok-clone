import React, { useRef, useState } from 'react'
import { VideoFooter, VideoSidebar } from '../../components'
import './Video.css'

function Video({ url, channel, description, song, likes, shares, messages }) {
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
        src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}

export default Video
