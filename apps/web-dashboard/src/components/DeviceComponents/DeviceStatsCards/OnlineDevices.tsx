import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card'
import { Device } from '@/src/temp/deviceList'

type Props = {
    devices: Device[]
}

const OnlineDevices = (props: Props) => {
    const onlineDevices = props.devices.filter(device => !device.isOffline)
  return (
    <Card className='w-[10%] border-0 bg-third hover:bg-forth transition duration-150'>
        <CardHeader>
            <CardTitle>Online devices</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-center text-[25px] font-bold'>
            <label>{onlineDevices.length}/{props.devices.length}</label>
        </CardContent>
    </Card>
  )
}

export default OnlineDevices