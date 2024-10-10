import React from 'react'
import DeviceCard from './DeviceCard'
import { deviceList } from '@/src/temp/deviceList'

type Props = {}

const DeviceList = (props: Props) => {
  return (
    <div className='flex flex-wrap justify-center'>
        {deviceList.map((device, index) => (
              <DeviceCard device={device} key={index} />
            ))}
    </div>
  )
}

export default DeviceList