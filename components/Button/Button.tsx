import {ButtonProps} from "./ButtonProps";
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg'
import cn from 'classnames';
import React, {ImgHTMLAttributes} from "react";


export const Button = ({children, appearance, arrow = 'none'}: ButtonProps):JSX.Element => {
    return (
            <button className={cn(styles.button,{
            [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost'
            })
            }>
                {children}
                {arrow !=='none' && <span className={cn(styles.arrow,{
                    [styles.right]:arrow == 'right',
                    [styles.down]:arrow == 'down'
                })}>
                    <ArrowIcon/>
                </span>}
            </button>
    )
}