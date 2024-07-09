import React from "react";
import Header from "../components/Header/Header";
import styles from './DefaultLayout.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function DefaultLayout({ children }){
    return(
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;