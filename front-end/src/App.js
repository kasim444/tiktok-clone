import './App.css'
import { Video } from './components'
import API from './api/index'
import { useEffect, useState } from 'react'

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await API.get('/v2/posts')
      setVideos(response.data)
    }
    fetchVideos()
  }, [])

  return (
    <div className='app'>
      <div className='app__videos'>
        {videos.map(
          ({
            _id,
            url,
            channel,
            description,
            song,
            likes,
            shares,
            messages,
          }) => (
            <Video
              key={_id}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  )
}

export default App
