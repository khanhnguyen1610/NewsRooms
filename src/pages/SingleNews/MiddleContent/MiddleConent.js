import React from 'react';
import classNames from 'classnames/bind';
import styles from './MiddleContent.module.scss';

const cx = classNames.bind(styles);

const MiddleContent = ({ img, text, title }) => {
  return (
    <>
      <div className={cx('title')}>
            <h2>{title}</h2>
        </div>
      <div className={cx('container')}>
          <div style={{'backgroundImage': `url(${img})`}} className={cx('image')}></div>
          <p className={cx('text')}>{text}</p>
      </div>
    </>
  );
};

export default MiddleContent;