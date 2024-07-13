import React from "react";
import classNames from "classnames/bind";
import styles from './Logo.module.scss';

const cx = classNames.bind(styles);

function Logo(){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <h1><span>News</span>Room</h1>
                <p>lorem the image keeps its aspect ratio, but is resized to fit within the given dimension</p>

                <div className={cx('social')}>
                    <span className={cx('twitter')}>f</span>
                    <span className={cx('facebook')}>f</span>
                    <span className={cx('in')}>f</span>
                    <span className={cx('ig')}>f</span>
                    <span className={cx('youtube')}>f</span>
                </div>
            </div>
        </div>
    )
}

export default Logo;