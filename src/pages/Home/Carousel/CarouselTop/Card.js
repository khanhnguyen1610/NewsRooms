import React from "react";
import styles from './Carousel.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Card({title, text, img}){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-img')} style={{'backgroundImage': 'url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)', 'objectFit': 'contain'}}></div>
            <p className={cx('wrapper-text')}>{text}</p>
        </div>
    )
}

export default Card;