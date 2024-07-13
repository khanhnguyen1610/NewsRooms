import React from "react";
import classNames from "classnames/bind";
import styles from './Trading.module.scss';

const cx = classNames.bind(styles);

function TradingCard({img, category, date, title}){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('img')} style={{'backgroundImage': `url(${img})`}}></div>
            <div className={cx('info')}>
                <p className={cx('category')}><span className={cx('category-color')}>{category}</span> / <span>{date}</span></p>
                <h3 className={cx('title-card')}>{title}</h3>
            </div>
        </div>
    )
}

export default TradingCard;