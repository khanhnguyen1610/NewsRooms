import React from "react";
import classNames from "classnames/bind";
import styles from './Featured.module.scss';
import CardFeatured from "./CardFetured";

const cx = classNames.bind(styles);

function Featured(){
    const items = [
        {
            id: 1,
            title: "Technology",
            des: "lorem technnogy",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 2,
            title: "Business",
            date: "January 01, 2015",
            des: "lorem technnogy",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        }
    ] 

    const renderItems = items.map((item) =>{
        return <CardFeatured key={item.id} title={item.title} date={item.date} des={item.des} img={item.img}/>
    })

    return(
        <>
            <div className={cx('title')}>
                <p>Categories</p>
                <span>View All</span>
            </div>
            <div className={cx('featured')}>{renderItems}</div>
        </>
    );
}

export default Featured;