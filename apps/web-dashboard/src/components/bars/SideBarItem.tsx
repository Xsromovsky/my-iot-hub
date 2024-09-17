import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';

type Props = {
  label: string;
  isAccordion: boolean;
};

const SideBarItem = (props: Props) => {
  return (
    <li className="flex justify-between items-center cursor-pointer hover:bg-third p-2">
      <span className="text-lg">{props.label}</span>
      {props.isAccordion ? <ChevronDownIcon className="size-[25px]" /> : null}
    </li>
  );
};

export default SideBarItem;
