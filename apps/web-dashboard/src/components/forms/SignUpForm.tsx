import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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
import { ERROR_MESSAGE, LOGIN_PAGE } from '@/src/constants/strings';

const signUpInputs = z
  .object({
    fullName: z.string(),
    email: z.string().email({ message: ERROR_MESSAGE.INVALID_EMAIL }),
    password: z.string().min(8, { message: ERROR_MESSAGE.PASSWORD_INVALID }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: ERROR_MESSAGE.PASSWORD_NOT_MATCH,
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
    <div className="flex bg-secondary w-full justify-center items-center rounded-lg">
      <div className="w-full h-full flex flex-col items-center m-3">
        {/* <h1 className="text-white p-1 text-[30px] font-bold">Sign up</h1> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={signUpFormClass}
          >
            <FormField
              name="fullName"
              render={({ field }) => {
                return (
                  <FormItem className="mb-1">
                    <FormLabel className={formLabelClass}>Full name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className={formInutClass}
                        {...field}
                        placeholder={LOGIN_PAGE.YOUR_NAME}
                      />
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
                  <FormItem className="mb-1">
                    <FormLabel className={formLabelClass}>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className={formInutClass}
                        {...field}
                        placeholder={LOGIN_PAGE.EXAMPLE_EMAIL}
                      />
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
                  <FormItem className="mb-1">
                    <FormLabel className={formLabelClass}>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className={formInutClass}
                        {...field}
                        placeholder={LOGIN_PAGE.PASSWORD}
                      />
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
                  <FormItem className="mb-1">
                    <FormLabel className={formLabelClass}>
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className={formInutClass}
                        {...field}
                        placeholder={LOGIN_PAGE.CON_PASSWORD}
                      />
                    </FormControl>
                    <FormMessage className="text-error px-1" />
                  </FormItem>
                );
              }}
            />
            <Button variant={'default'} className="w-full mt-2">
              {LOGIN_PAGE.SIGN_UP}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
