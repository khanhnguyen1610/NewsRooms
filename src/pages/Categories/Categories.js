import React from "react";
import classNames from "classnames/bind";
import styles from './Categories.module.scss';
import CategoriesCard from "./CategoriesCard/CategoriesCard";
import FollowUs from "../../components/FollowUS/FollowUs";
import Newsletter from "../../components/Newsletter/Newsltter";
import Trading from "../../components/Trading/Trading";
import Tags from "../../components/Tags/Tags";
import TotalCategory from "./TotalCategories/TotalCategory";

const cx = classNames.bind(styles);

function Categories(){
    return(
        <div className={cx('wrapper')}>
            <p className={cx('direct')}><span>Home</span> / <span>Category</span> / Technology</p>
            <div className={cx('row')}>
                <div className={cx('row-right')}>
                    <CategoriesCard />
                    <div className={cx('ad')}>ads</div>
                    <div className={cx('Total-category')}><TotalCategory /></div>
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

export default Categories;