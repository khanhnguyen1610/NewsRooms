import React from "react";
import styles from './CarouselMiddle.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Card({date, des, img}){
    return(
        <div style={{'backgroundImage': `url(${img})`}} className={cx('wrapper')}>
            <p className={cx('date')}>{date}</p>
            <h2 className={cx('des')}>{des}</h2>
        </div>
    )
}

export default Card;