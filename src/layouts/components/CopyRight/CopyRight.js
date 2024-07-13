import React from "react";
import classNames from "classnames/bind";
import styles from './CopyRight.module.scss'

const cx = classNames.bind(styles);

function CopyRight(){
    return (
        <div className={cx('wrapper')}>
            <p>
                <span className={cx('icon')}>c</span>
                <span className={cx('text-color')}>Your Site Name</span> All Rights Reserved. Designed by 
                <span className={cx('text-color')}> HTML Codex</span>
            </p>
        </div>
    )
}

export default CopyRight;