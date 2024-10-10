import { Link } from '@tanstack/react-router';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="text-white flex justify-center items-center h-screen">
      <div className='flex flex-col items-center'>
        <h1 className='text-[5rem]'>Page Not Found</h1>
        {/* <Link to='/' className=' bg-secondary rounded-lg p-2 hover:bg-third transition duration-150'>Back to login page</Link> */}
      </div>
    </div>
  );
};

export default NotFoundPage;
