import React from "react";
import classNames from "classnames/bind";
import styles from './CategoriesCard.module.scss';
import { Link } from "react-router-dom";
import config from "../../config";

const cx = classNames.bind(styles);

function CategoriesCard({id, date, des, img}) {
    return(
        <>
            <Link to={`${config.routes.singleNewsDetail}/${id}`} className={cx('wrapper')}>
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