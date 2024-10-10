import React from 'react';
import { PersonIcon } from '@radix-ui/react-icons';
import Menu from './Menu';
import { BellIcon } from 'lucide-react';
type Props = {
  label?: string;
};

const TopBar = (props: Props) => {
  return (
    <div className="text-white bg-secondary w-full h-[60px]">
      <div className="relative flex justify-center items-center h-full">
        <h1 className="text-[35px]">{props.label}</h1>
        {/* <PersonIcon className="absolute right-4 content-center size-[45px] p-1 rounded-full bg-third cursor-pointer hover:bg-forth" /> */}
        
        <div className="flex absolute right-4 content-center items-center space-x-3">
          <BellIcon className='cursor-pointer hover:scale-110 transition duration-150'/>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
