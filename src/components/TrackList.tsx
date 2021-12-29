import { BsVolumeUpFill, BsMusicNoteList, BsFillCircleFill } from 'react-icons/bs';
import { FaDesktop } from 'react-icons/fa';

function TrackList() {
  return (
    <div className='trackList'>
      <div className='top'>
        <i>
          <BsFillCircleFill/>
        </i>
        <p className='trackName'>
          Sample name <span className='artistName'>Artist</span>
        </p>
      </div>
      <div className='bottom'>
        <i>
          <BsVolumeUpFill/>
        </i>
        <input type='range'></input>
        <i>
          <BsMusicNoteList/>
        </i>
        <i>
          <FaDesktop/>
        </i>
      </div>
    </div>
  )
}

export default TrackList;