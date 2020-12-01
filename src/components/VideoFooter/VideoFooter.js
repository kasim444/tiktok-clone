import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'
import record from '../../assets/images/record.webp'

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@willsmith</h3>
        <p>This guy. Coming into MY house.</p>

        <div className='videoFooter__ticker'>
          <MusicNoteIcon className='videoFooter__icon' />

          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>I am a song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className='videoFooter__record' src={record} alt='Record' />
    </div>
  )
}

export default VideoFooter
