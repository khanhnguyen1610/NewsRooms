import React from "react";
import classNames from "classnames/bind";
import styles from './CategoriesCard.module.scss';

const cx = classNames.bind(styles);

function CategoriesCard({ date, des, img}) {
    return(
        <>
            <div className={cx('wrapper')}>
                <div style={{'backgroundImage': `url(${img})`}} className={cx('img')}></div>
                <div className={cx('info')}>
                    <p className={cx('date')}>{date}</p>
                    <p className={cx('des')}>{des}</p>
                </div>
            </div>
        </>
    )
}

export default CategoriesCard;