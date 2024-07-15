import React from 'react';
import classNames from 'classnames/bind';
import styles from './FooterContent.module.scss';

const cx = classNames.bind(styles);

const FooterContent = ({ img, text, title }) => {
  return (
    <>
        <div className={cx('title')}>
            <h2>{title}</h2>
        </div>
        <div className={cx('container')}>
            <p className={cx('text')}>{text}</p>
            <div style={{'backgroundImage': `url(${img})`}} className={cx('image')}></div>
        </div>
    </>
  );
};

export default FooterContent;