import React from "react";
import styles from './Categories.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Card({ category, img }){
    return (
        <div className={cx('wrapper')} style={{'backgroundImage': `url(${img})`}}>
            <h3 className={cx('wrapper-category')}>{category}</h3>
        </div>
    )
}

export default Card;