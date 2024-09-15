import React from 'react'
import TopBar from '../components/bars/TopBar'
import SideBar from '../components/bars/SideBar'
import { HOME_PAGE } from '../utils/Constants'



const HomePage = () => {
  return (
    <div className=''>
      <div>
        <TopBar label={HOME_PAGE.WELCOME}/>
      </div>
      <SideBar/>
    </div>
  )
}

export default HomePage