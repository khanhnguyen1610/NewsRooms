import React from "react";
import classNames from "classnames/bind";
import styles from './Footer.module.scss';
import Logo from "./Logo/Logo";
import Tags from "../../../components/Tags/Tags";
import QuickLink from "./QuickLinks/QuickLick";

const cx = classNames.bind(styles)

function Footer(){
    return(
        <div className={cx('footer')}>
            <div className={cx('logo')}><Logo /></div>
            <div className={cx('categories')}><Tags head={"Categories"} /></div>
            <div className={cx('tags')}><Tags head={"Tags"} /></div>
            <div className={cx('quick-link')}><QuickLink /></div>            
        </div>
    )
}

export default Footer;