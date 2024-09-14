import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const formInutClass = twMerge(
    classNames(
      'bg-primary p-1 border border-third rounded-lg text-white focus:ring-2 focus:ring-white'
    )
);

export const signUpFormClass = classNames('w-full px-4')

export const formLabelClass = classNames('px-1')