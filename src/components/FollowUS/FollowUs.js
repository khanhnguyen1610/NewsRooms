import React from "react";
import classNames from "classnames/bind";
import styles from "./FollowUs.module.scss";

const cx = classNames.bind(styles);

function FollowUs(){
    return(
        <>
            <div className={cx('title')}>
                <p>Follow Us</p>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('social', 'facebook')}>
                    <span>f</span>
                    <p className={cx('count')}>12,235 Fans</p>
                </div>
                <div className={cx('social', 'twitter')}>
                    <span>f</span>
                    <p className={cx('count')}>12,235 Fans</p>
                </div>
                <div className={cx('social', 'in')}>
                    <span>f</span>
                    <p className={cx('count')}>12,235 Fans</p>
                </div>
                <div className={cx('social', 'ig')}>
                    <span>f</span>
                    <p className={cx('count')}>12,235 Fans</p>
                </div>
                <div className={cx('social', 'youtube')}>
                    <span>f</span>
                    <p className={cx('count')}>12,235 Fans</p>
                </div>
                <div className={cx('social', 'bank')}>
                    <span>f</span>
                    <p className={cx('count')}>12,235 Fans</p>
                </div>    
            </div>        
        </>
    )
}

export default FollowUs;