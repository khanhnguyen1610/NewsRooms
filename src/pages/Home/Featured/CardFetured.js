import React from "react";
import classNames from "classnames/bind";
import styles from './Featured.module.scss';

const cx = classNames.bind(styles);

function CardFeatured({img, des, category, date, title}){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('img')} style={{'backgroundImage': `url(${img})`}}> </div>
            <div className={cx('info')}>
                <p className={cx('category')}><span className={cx('category-color')}>{category}</span> / <span>{date}</span></p>
                <h3 className={cx('title-card')}>{title}</h3>
                <p className={cx('description')}>{des}</p>
            </div>
        </div>
    )
}

export default CardFeatured;