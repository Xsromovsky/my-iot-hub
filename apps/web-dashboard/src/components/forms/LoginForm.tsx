import React, { HTMLAttributes, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '@/src/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/Form';
import { Input } from '@/src/components/ui/Input';
import { formInutClass } from './classes';
import { ERROR_MESSAGE, LOGIN_PAGE } from '@/src/constants/strings';

const loginInputs = z.object({
  email: z.string().email({ message: ERROR_MESSAGE.INVALID_EMAIL }),
  password: z.string(),
});

type LoginForm = z.infer<typeof loginInputs>;

const LoginForm = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginInputs),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex bg-secondary w-full justify-center items-center rounded-lg">
      <div className="w-full h-full flex flex-col items-center m-3">
        {/* <h1 className="text-white p-1 text-[30px] font-bold">Sign in</h1> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-4">
            <FormField
              name="email"
              render={({ field }) => {
                return (
                  <FormItem className="mb-1">
                    <FormLabel className="px-1">Email</FormLabel>
                    <FormControl>
                      <Input type="text" className={formInutClass} {...field} placeholder={LOGIN_PAGE.EXAMPLE_EMAIL}/>
                    </FormControl>
                    <FormMessage className="text-error px-1" />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="password"
              render={() => {
                return (
                  <FormItem>
                    <FormLabel className="px-1">Password</FormLabel>
                    <FormControl>
                      <Input type="password" className={formInutClass} placeholder={LOGIN_PAGE.PASSWORD}/>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <Button
              variant={'default'}
              className="w-full mt-3"
            >
              {LOGIN_PAGE.SIGN_IN}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
