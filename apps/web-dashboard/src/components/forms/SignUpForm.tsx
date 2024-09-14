import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import {SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { formInutClass, formLabelClass, signUpFormClass } from './classes';

const signUpInputs = z
  .object({
    fullName: z.string(),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Password not match',
    path: ['confirmPassword'],
  });

type SignUpForm = z.infer<typeof signUpInputs>;

const SignUpForm = () => {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpInputs),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex bg-secondary w-1/6 justify-center items-center rounded-lg">
      <div className="w-full h-full flex flex-col items-center m-3">
        <h1 className="text-white p-1 text-[30px] font-bold">Sign up</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={signUpFormClass}>
            <FormField
              name="fullName"
              render={({ field }) => {
                return (
                  <FormItem className='mb-1'>
                    <FormLabel className={formLabelClass}>Full name</FormLabel>
                    <FormControl>
                      <Input type="text" className={formInutClass} {...field} placeholder='Your name'/>
                    </FormControl>
                    <FormMessage className="text-error px-1" />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="email"
              render={({ field }) => {
                return (
                  <FormItem className='mb-1'>
                    <FormLabel className={formLabelClass}>Email</FormLabel>
                    <FormControl>
                      <Input type="text" className={formInutClass} {...field} placeholder='example@mail.com' />
                    </FormControl>
                    <FormMessage className="text-error px-1" />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="password"
              render={({ field }) => {
                return (
                  <FormItem className='mb-1'>
                    <FormLabel className={formLabelClass}>Password</FormLabel>
                    <FormControl>
                      <Input type="password" className={formInutClass} {...field} placeholder='password'/>
                    </FormControl>
                    <FormMessage className="text-error px-1" />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="confirmPassword"
              render={({ field }) => {
                return (
                  <FormItem className='mb-1'>
                    <FormLabel className={formLabelClass}>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" className={formInutClass} {...field}  placeholder='confirm password'/>
                    </FormControl>
                    <FormMessage className="text-error px-1" />
                  </FormItem>
                );
              }}
            />
            <Button variant={'default'} className='w-full mt-2'>Sign Up</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
