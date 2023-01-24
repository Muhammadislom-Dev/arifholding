import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../Footer/Footer'
import Meeting from './components/Meeting/Meeting'
import './MeetingPage.css'

const MeetingPage = () => {
  return (
    <div className='meetingpage'>
        <Nav />
        <Meeting />
        {/* <Footer /> */}
    </div>
  )
}

export default MeetingPage