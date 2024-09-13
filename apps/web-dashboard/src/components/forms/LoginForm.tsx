import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '@/src/components/ui/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/Form';
import { Input } from '@/src/components/ui/Input';

const Inputs = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string(),
});

type LoginForm = z.infer<typeof Inputs>;

const LoginForm = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(Inputs),
  });

  const inputClass = twMerge(
    classNames(
      'bg-primary p-1 border border-third rounded-lg text-white focus:ring-2 focus:ring-white'
    )
  );

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex bg-secondary w-1/6 justify-center items-center rounded-lg">
      <div className="w-full h-full flex flex-col items-center  m-3">
        <h1 className="text-white p-1 text-[30px] font-bold">Sign in</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-2'>
            <FormField
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className='px-1'>Email</FormLabel>
                    <FormControl>
                      <Input type="text" className={inputClass}/>
                    </FormControl>
                  </FormItem>
                  
                );
              }}
            />
            <FormField
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className='px-1'>Password</FormLabel>
                    <FormControl>
                      <Input type="password" className={inputClass}/>
                    </FormControl>
                  </FormItem>
                  
                );
              }}
            />
            <span className='px-1'>Forgot password?</span>
            <Button variant={"default"} className='hover:bg-third w-full'>Sign in</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
