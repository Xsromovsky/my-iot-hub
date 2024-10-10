import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/Card';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { Device } from '../../temp/deviceList';
import { EnterFullScreenIcon } from '@radix-ui/react-icons';
import { DEVICE_STRINGS, UNITS } from '../../constants/strings';
import DeviceDialog from './DeviceDialog';

type Props = {
  device: Device;
};

const DeviceCard = (props: Props) => {
  // const [isOffline, setIsOffline] = useState(false)

  const cardClass = twMerge(
    classNames(' w-[20%] min-h-[200px] h-auto m-2 border-0 text-white', {
      'bg-secondary': !props.device.isOffline,
      'bg-red-700': props.device.isOffline,
    })
  );
  const statusClass = twMerge(classNames({
    'text-green-600': !props.device.isOffline
  }))

  return (
    <Card className={cardClass}>
      <CardHeader className="relative place-items-center">
        <CardTitle>{props.device.name}</CardTitle>
        <CardDescription>
          {DEVICE_STRINGS.STATUS}
          <label className={statusClass}>{props.device.isOffline
            ? DEVICE_STRINGS.OFFLINE
            : DEVICE_STRINGS.ONLINE}</label>
         
        </CardDescription>
        {/* <EnterFullScreenIcon className="absolute top-1 right-2 size-[20px] cursor-pointer hover:scale-125 transition duration-150" /> */}
        <DeviceDialog device={props.device}/>
      </CardHeader>
      <CardContent className="flex flex-col text-lg font-bold">
        <span>
          {DEVICE_STRINGS.TEMPERATURE} {props.device.temp} {UNITS.CELSIUS}
        </span>
        <span>
          {DEVICE_STRINGS.HUMIDITY} {props.device.humidity}
          {UNITS.PERCENTAGE}
        </span>
      </CardContent>
    </Card>
  );
};

export default DeviceCard;
