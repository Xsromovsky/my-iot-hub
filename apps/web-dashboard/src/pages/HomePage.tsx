import React from 'react';
import TopBar from '../components/bars/TopBar';
import SideBar from '../components/bars/SideBar';
import { HOME_PAGE } from '../constants/strings';
import DeviceCard from '../components/DeviceCard';
import { deviceList } from '../temp/deviceList';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <TopBar label={HOME_PAGE.WELCOME} />
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1">
          <div className="flex flex-wrap justify-center mt-2">
            {deviceList.map((device, index) => (
              <DeviceCard device={device} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
