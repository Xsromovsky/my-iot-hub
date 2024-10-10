import React from 'react'
import TotalDevices from './DeviceStatsCards/TotalDevices'
import { deviceList } from '@/src/temp/deviceList'
import OnlineDevices from './DeviceStatsCards/OnlineDevices'


type Props = {}

const DeviceStats = (props: Props) => {
  return (
    <div className='text-white m-2 bg-secondary rounded-lg p-2 flex space-x-3'>
        <TotalDevices devices={deviceList.length}/>
        <OnlineDevices devices={deviceList}/>
    </div>
  )
}

export default DeviceStats