import {RatingProps} from "./RatingProps";
import styles from './Rating.module.css';
import cn from 'classnames';
import {useEffect, useState} from "react";
import StarIcon from './star-solid.svg';


export const Rating =({isEditable = false, rating,setRating, className, ...props}:RatingProps):JSX.Element => {
    const [ratingArray,setRatingfArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        const constructRating = (currentRating: number) => {
            const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
                return (
                    <StarIcon
                        className={cn(styles.star, {
                            [styles.filled]: i < currentRating
                        })}
                    />
                )
            });
            setRatingfArray(updateArray);
        };
        constructRating(rating);
    },[rating]);
    return (
        <div {...props} className={styles.arrstars}>
            {ratingArray.map((r,i) =>(<span key={i}>{r}</span>))}
        </div>
);

}