import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '../ui/Dialog';
import { EnterFullScreenIcon } from '@radix-ui/react-icons';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Device } from '@/src/temp/deviceList';
import { DEVICE_STRINGS } from '@/src/constants/strings';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

type Props = {
  device: Device;
};

const DeviceDialog = (props: Props) => {
  const deviceDialogClass = twMerge(
    classNames('text-[25px] font-bold', {
      'text-red-600': props.device.isOffline,
    })
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <EnterFullScreenIcon className="absolute top-1 right-2 size-[20px] cursor-pointer hover:scale-125 transition duration-150" />
      </DialogTrigger>
      <DialogContent className="text-white bg-primary w-[50%] h-[50%] flex flex-col border-none">
        <DialogHeader className="flex">
          <DialogTitle className={deviceDialogClass}>
            {props.device.name}
          </DialogTitle>
          <DialogDescription>
            {DEVICE_STRINGS.STATUS}
            <label className={props.device.isOffline ? 'text-red-500' : 'text-green-600'}>
              {props.device.isOffline
                ? DEVICE_STRINGS.OFFLINE
                : DEVICE_STRINGS.ONLINE}
            </label>
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <p>hello there</p>
          <p>i am here</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeviceDialog;
