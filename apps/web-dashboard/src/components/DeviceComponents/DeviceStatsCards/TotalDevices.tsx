import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card'
import { Device } from '@/src/temp/deviceList'

type Props = {
    devices: number
}

const TotalDevices = (props: Props) => {
  return (
    <Card className='w-[10%] border-0 bg-third hover:bg-forth transition duration-150'>
        <CardHeader>
            <CardTitle className='flex justify-center'>Total devices</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-center text-[25px] font-bold'>
            <label>{props.devices}</label>
        </CardContent>
    </Card>
  )
}

export default TotalDevices