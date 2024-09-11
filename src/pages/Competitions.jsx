import React from 'react'
import '../style/Competition.css'
import Parts from '../components/Part.jsx'

const Competitions = () => {
  return (
    <div className='Competition-container'>
        <p className='comp'>Competitions</p>
        <div className='part'>
            < Parts />
      </div>
    </div>
  )
}

export default Competitions