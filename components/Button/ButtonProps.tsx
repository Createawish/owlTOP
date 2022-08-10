import styles from './Button.module.css';
import {ReactNode} from "react";

export interface ButtonProps {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
}