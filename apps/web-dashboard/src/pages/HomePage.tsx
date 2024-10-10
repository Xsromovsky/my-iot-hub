import React from 'react';
import TopBar from '../components/bars/TopBar';
import SideBar from '../components/bars/SideBar';
import { HOME_PAGE } from '../constants/strings';
import DeviceCard from '../components/DeviceComponents/DeviceCard';
import { deviceList } from '../temp/deviceList';
import DeviceList from '../components/DeviceComponents/DeviceList';
import DeviceStats from '../components/DeviceComponents/DeviceStats';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <TopBar label={HOME_PAGE.WELCOME} />
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1">
          <div className=" mt-2">
            <DeviceStats/>
            <DeviceList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
