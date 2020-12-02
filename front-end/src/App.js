import './App.css'
import { Video } from './components'

function App() {
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video
          url={
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
          }
          channel={'@willsmith'}
          description={'My bad, I need a chiropractor.'}
          song={'TRNDSTTR - Black Coast'}
          likes={1010}
          shares={173}
          messages={412}
        />
        <Video
          url={
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
          }
          channel={'@willsmith'}
          description={'Adventure is out there 🌍'}
          song={'I Love You, Part 1 - elliot'}
          likes={540}
          shares={841}
          messages={371}
        />
      </div>
    </div>
  )
}

export default App
