import { PersonIcon } from '@radix-ui/react-icons';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/DropDownMenu';
import { DROPDOWN_MENU } from '@/src/constants/strings';

type Props = {};

const Menu = (props: Props) => {
  return (
    // TODO add real user name
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <PersonIcon className="  size-[45px] p-1 rounded-full bg-third cursor-pointer hover:bg-forth" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-secondary text-white border-third w-52">
        <DropdownMenuLabel>Username</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-primary" />
        <DropdownMenuItem>{DROPDOWN_MENU.PROFILE}</DropdownMenuItem>
        <DropdownMenuItem>{DROPDOWN_MENU.SETTINGS}</DropdownMenuItem>
        <DropdownMenuSeparator className="bg-primary" />
        <DropdownMenuItem>{DROPDOWN_MENU.LOGOUT}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;