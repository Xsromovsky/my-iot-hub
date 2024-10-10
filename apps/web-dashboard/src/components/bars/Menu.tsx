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
import { Link, useNavigate } from '@tanstack/react-router';
import { useUser } from '@/src/contexts/UserContext';



const Menu = () => {
  const { logout } = useUser()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate({to: '/', replace: true})

  }
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
        <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>{DROPDOWN_MENU.LOGOUT}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;