import './App.css'
import { Video } from './components'

function App() {
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video />
        <Video />
      </div>
    </div>
  )
}

export default App