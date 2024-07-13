import React from "react";
import classNames from "classnames/bind";
import styles from './Trading.module.scss';
import TradingCard from "./TrandingCard";

const cx = classNames.bind(styles);

function Trading(){
    const items = [
        {
            id: 1,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 2,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 3,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 4,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 5,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        }
    ]

    const renderItems = items.map((item) =>{
        return <TradingCard key={item.id} title={item.title} category={item.category} date={item.date} img={item.img}/>
    })
    return(
        <>
            <div className={cx('title')}>
                <p>Trading</p>
            </div>
            <div className={cx('tranding')}>{renderItems}</div>
        </>
    )
}

export default Trading;