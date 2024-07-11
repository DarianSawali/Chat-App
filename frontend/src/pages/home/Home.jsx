import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:h-[30rem] md:h-[35rem] rounded-lg overflow-hidden bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
      <Sidebar />
      {/* <MessageContainer /> */}
    </div>
  )
}

export default Home
