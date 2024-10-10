import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import SideBarItem from './SideBarItem';
import { sideBarItems } from '@/src/utils/SideBarList';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion';

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="flex text-white bg-secondary w-[200px]  border-t-2 border-primary">
      <ul className="w-full">
        {sideBarItems.map((item, index) => (
          <SideBarItem
            item={item}
            sideBarValue={`item-${index}`}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
