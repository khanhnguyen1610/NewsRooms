import React from "react";
import classNames from "classnames/bind";
import styles from "./Newsletter.module.scss";

const cx = classNames.bind(styles);

function Newsletter(){
    return(
        <>
            <div className={cx('title')}>
                <p>Newsletter</p>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('info')}>
                    <p className={cx('des')}>lorem rest email if your want to register, please fill your email below</p>
                    <div className={cx('form')}>
                        <input type="text" placeholder="Your Email"/>
                        <button>Sign Up</button>
                    </div>
                    <p>please enter your email</p>
                </div>
            </div>
        </>
    )
}

export default Newsletter;