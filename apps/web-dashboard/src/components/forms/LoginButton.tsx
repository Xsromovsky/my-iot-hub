import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

type Props = {
  label: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
};

const LoginButton = (props: Props) => {
  const mergedClasses = twMerge(classNames(props.className));

  return <button type={props.type} className={mergedClasses}>{props.label}</button>;
};

export default LoginButton;
