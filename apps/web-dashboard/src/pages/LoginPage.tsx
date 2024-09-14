import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import SignUpForm from '../components/forms/SignUpForm'
import { Tabs, TabsList, TabsTrigger } from '../components/ui/Tabs'
import { TabsContent } from '@radix-ui/react-tabs'


const LoginPage = () => {
  return (
    <div className='flex text-white h-screen w-full'>
        <div className='flex justify-center items-center w-full h-full'>
          <Tabs defaultValue='login' className='w-[400px] bg-secondary rounded-lg'>
            <TabsList>
              <TabsTrigger value='Login'>Login</TabsTrigger>
              <TabsTrigger value='SignUp'>Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value='Login' >Hello there</TabsContent>
            <TabsContent value='SignUp' >the second tab</TabsContent>
          </Tabs>
        </div>
    </div>
  )
}

export default LoginPage