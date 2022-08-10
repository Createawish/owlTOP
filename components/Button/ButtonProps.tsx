import styles from './Button.module.css';
import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?:'right'|'down'|'none';
}