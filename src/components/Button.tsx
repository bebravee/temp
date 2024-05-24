import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface IVariants {
  primary: string;
  secondary: string;
  dark: string;
  light: string;
  ghost: string;
}

interface IButtonProps {
  variant?: keyof IVariants;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const Button: FC<IButtonProps> = ({ variant, icon, children, className, ...props }) => {
  const variants: IVariants = {
    primary: 'bg-orange text-black',
    secondary: 'bg-shop text-black',
    dark: 'bg-black text-white',
    light: 'bg-white text-black',
    ghost: 'bg-transparent',
  };

  return (
    <button
      {...props}
      className={cn(
        'pb-3 pt-3 px-10 max-h-12 rounded-full hover:brightness-110 active:brightness-125 active:-translate-y-1 duration-300 text-base font-normal',
        variant ? variants[variant] : variants['primary'],
        icon && 'pl-[54px] flex gap-[70px]',
        className
      )}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
