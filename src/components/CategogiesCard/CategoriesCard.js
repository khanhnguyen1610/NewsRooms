import React from "react";
import classNames from "classnames/bind";
import styles from './CategoriesCard.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CategoriesCard({ id, date, des, img}) {

    const key = () => {
        console.log(id);
    }

    return(
        <>
            <Link className={cx('wrapper')} onClick={key}>
                <div style={{'backgroundImage': `url(${img})`}} className={cx('img')}></div>
                <div className={cx('info')}>
                    <p className={cx('date')}>{date}</p>
                    <p className={cx('des')}>{des}</p>
                </div>
            </Link>
        </>
    )
}

export default CategoriesCard;