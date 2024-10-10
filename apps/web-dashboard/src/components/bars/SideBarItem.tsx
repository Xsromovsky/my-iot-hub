import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion';
import { SideBarType } from '@/src/utils/SideBarList';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

type Props = {
  item: SideBarType;
  sideBarValue: string;
};

const accordionItemClass = twMerge(classNames('cursor-pointer p-2 py-2 hover:bg-forth text-[15px]'))

const SideBarItem = (props: Props) => {
  const accordionItem = (
    <Accordion type="single" collapsible className="w-full" >
      <AccordionItem value={props.sideBarValue} className='border-0'>
        <AccordionTrigger className='py-1 p-2'>{props.item.label}</AccordionTrigger>
        {props.item.items?.map((item, index) => (
          <AccordionContent className={accordionItemClass} key={index}>{item.label}</AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
  return (
    <li className="flex justify-between items-center cursor-pointer hover:bg-third transition duration-150">
      {props.item.isAccordion ? accordionItem : (
        <span className="text-md font-medium p-2">{props.item.label}</span>
      )}

      {/* {props.isAccordion ? <ChevronDownIcon className="size-[25px]" /> : null} */}
    </li>
  );
};

export default SideBarItem;
