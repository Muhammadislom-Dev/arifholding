import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../Footer/Footer'
import News from './components/News/News'
import Sidebar from './components/Sidebar/Sidebar'

const NewsPage = () => {
  return (
    <div className='newspage'>
        <Nav />
        <Sidebar />
        <News />
        <Footer />
    </div>
  )
}

export default NewsPage