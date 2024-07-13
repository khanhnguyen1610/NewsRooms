import React from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

const Comment = ({ avatarUrl, name, date, text, children }) => {
  return (
    <div className={cx('comment')}>
      <img src={avatarUrl} alt={`${name}'s avatar`} className={cx('avatar')} />
      <div className={cx('content')}>
        <div className={cx('header')}>
          <span className={cx('name')}>{name}</span>
          <span className={cx('date')}>{date}</span>
        </div>
        <div className={cx('text')}>{text}</div>
        <button className={cx('replyButton')}>Reply</button>
        {children}
      </div>
    </div>
  );
};

export default Comment;