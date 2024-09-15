import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import SideBarItem from './SideBarItem';
import { sideBarItems } from '@/src/utils/SideBarList';

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="text-white bg-secondary w-[200px] h-screen">
        <ul className=''>
          {sideBarItems.map((item, index) => (
            <SideBarItem label={item.label} key={index} isAccordion={item.isAccordion}/>
          ))}
        </ul>
      
    </div>
  );
};

export default SideBar;
