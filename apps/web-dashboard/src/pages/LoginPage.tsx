import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import SignUpForm from '../components/forms/SignUpForm';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { LOGIN_PAGE } from '../utils/Constants';


const LoginPage = () => {
  return (
    <div className="flex text-white h-screen w-full">
      <div className="flex justify-center items-center w-full h-full">
        <Tabs defaultValue="Login" className="w-1/6 bg-secondary rounded-md">
          <TabsList className="flex p-0">
            <TabsTrigger
              value="Login"
              className="hover:bg-third border-b border-r border-third rounded-l-lg focus:bg-third text-[20px] w-full aria-[selected=true]:bg-third "
            >
              {LOGIN_PAGE.SIGN_IN}
            </TabsTrigger>
            <TabsTrigger
              value="SignUp"
              className="hover:bg-third border-b border-l border-third rounded-r-lg focus:bg-third text-[20px] w-full aria-[selected=true]:bg-third "
            >
              {LOGIN_PAGE.SIGN_UP}
            </TabsTrigger>
            {/* <TabsTrigger value='Login' className='hover:bg-third border-b border-r border-third rounded-l-lg focus:bg-third  text-[20px] w-full'>Sign In</TabsTrigger>
              <TabsTrigger value='SignUp' className='hover:bg-third border-b border-l border-third rounded-r-lg focus:bg-third text-[20px] w-full'>Sign Up</TabsTrigger> */}
          </TabsList>
          <TabsContent value="Login" className="w-full">
            <LoginForm />
          </TabsContent>
          <TabsContent value="SignUp" className="w-full">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
