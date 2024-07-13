import React from "react";
import Header from "../components/Header/Header";
import styles from './DefaultLayout.module.scss';
import className from 'classnames/bind';
import Footer from "../components/Footer/Footer";
import CopyRight from "../components/CopyRight/CopyRight";

const cx = className.bind(styles);

function DefaultLayout({ children }){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                {children}
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
            <div className={cx('copy-right')}><CopyRight /></div>
        </div>
    )
}

export default DefaultLayout;