import React from "react";
import styles from './Home.module.scss';
import classNames from "classnames/bind";
import SlideShow from "./SlideShow/SlideShow";
import CarouselTop from "./Carousel/CarouselTop/CarouselTop";
import Categories from "./Categories/Categories";
import CarouselMiddle from "./Carousel/CarouselMiddle/CarouselMiddle";
import Business from "./Categories/Business/Business";
import Entertainment from "./Categories/Entertainment/Entertainment";
import Technology from "./Categories/Technology/Technology";
import Sport from "./Categories/Sport/Sport";
import Featured from "./Featured/Featured";

const cx = classNames.bind(styles);

function Home(){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <CarouselTop />
                <div className={cx('slide')}>
                    <div className={cx('slide-show')}><SlideShow /></div>
                    <div className={cx('category')}><Categories /></div>
                </div>
                <div className={cx('featured')}>
                    <CarouselMiddle />
                </div>
                <div className={cx('categories')}>
                    <div className={cx('categories-row')}>
                        <div className={cx('business')}><Business /></div>
                        <div className={cx('technology')}><Technology /></div>
                    </div>
                    <div className={cx('categories-row')}>
                        <div className={cx('business')}><Entertainment /></div>
                        <div className={cx('sport')}><Sport /></div>
                    </div>
                </div>
                <div className={cx('block-row')}>
                    <div className={cx('block-left')}>
                        <div className={cx('featured')}><Featured /></div>
                    </div>
                    <div className={cx('block-right')}>
                        <div>folling</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;