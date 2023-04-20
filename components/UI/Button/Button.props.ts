import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children : ReactNode,
    href? : string ,
}