import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LoginButton from './LoginButton';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';


const Inputs = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginForm = z.infer<typeof Inputs>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(Inputs),
  });

  const inputClass = twMerge(classNames('bg-third p-1 rounded-lg text-white'))

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
    
  }

  return (
    <div className="flex bg-secondary w-1/6 justify-center items-center rounded-lg">
        <div className='w-full h-full flex flex-col items-center m-3'>

      <h1 className='text-white p-1 text-[30px] font-bold'>Sign in</h1>
        <form className='flex flex-col w-full space-y-3 ' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("email")} placeholder='example@mail.com' className={inputClass} />
            <input type="password" {...register('password')} placeholder='password' className={inputClass}/>
            <LoginButton label='Login' type='submit' className={'p-1 rounded-lg bg-third hover:bg-accent'}/>
        </form>
        </div>
      
    </div>
  );
};

export default LoginForm;
