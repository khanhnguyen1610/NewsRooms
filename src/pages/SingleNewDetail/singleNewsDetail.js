import React from "react";
import classNames from "classnames/bind";
import styles from './SingleNews.module.scss';
import FollowUs from "../../components/FollowUS/FollowUs";
import Newsletter from "../../components/Newsletter/Newsltter";
import Trading from "../../components/Trading/Trading";
import Tags from "../../components/Tags/Tags";
import Content from "./Content";
import Comment from "./Comment/Comment";
import Form from "./Form/Form";

const cx = classNames.bind(styles);

function singleNewsDetail(){

    return(
    <div className={cx('wrapper')}>
        <p className={cx('direct')}><span>Home</span> / <span>Category</span> / <span>Technology</span> / News Title</p>
        <div className={cx('row')}>
            <div className={cx('row-right')}>
                <div className={cx('content')}>
                    <Content />
                </div>
                <div className={cx('comment')}>
                    <h2 className={cx('comment-title')}>3 Comments</h2>
                    <Comment 
                        avatarUrl="https://via.placeholder.com/50"
                        name="John Doe"
                        date="01 Jan 2045 at 12:00pm"
                        text="Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit."
                    >
                        <Comment 
                        avatarUrl="https://via.placeholder.com/50"
                        name="John Doe"
                        date="01 Jan 2045 at 12:00pm"
                        text="Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit."
                        />
                    </Comment>
                    <Comment 
                        avatarUrl="https://via.placeholder.com/50"
                        name="John Doe"
                        date="01 Jan 2045 at 12:00pm"
                        text="Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit."
                    />
                </div>
                <div className={cx('form')}>
                    <Form />
                </div>
            </div>
            <div className={cx('row-left')}>
                <div className={cx('follow-us')}>
                    <FollowUs />
                </div>
                <div className={cx('newsletter')}><Newsletter /></div>
                <div className={cx('image')}></div>
                <div className={cx('tranding')}><Trading /></div>
                <div className={cx('tags')}><Tags head={"Tags"} /></div>
            </div>
        </div>
    </div>
    )
}

export default singleNewsDetail;