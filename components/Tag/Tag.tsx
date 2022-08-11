import {TagProps} from "./TagProps";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({children,size,color='ghost',className,href, ...props}:TagProps):JSX.Element => {
        return( <div className={cn(styles.tag, className,{
                [styles.ghost]: color == 'ghost',
                [styles.primary]: color == 'primary',
                [styles.red]: color == 'red',
                [styles.green]: color == 'green',
                [styles.grey]: color == 'ghost',
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
        })}{...props}>
                    {href? <a href={href}>{children}</a> : <>{children}</>}

        </div>

)
};