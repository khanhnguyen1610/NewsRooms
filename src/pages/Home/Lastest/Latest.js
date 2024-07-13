import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './Latest.module.scss';
import CardFeatured from "../Featured/CardFetured";

const cx = classNames.bind(styles);

function Latest(){
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const items = [
        {
            id: 1,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            des: "lorem technnogy lorem demo lorem technnogy lorem demo lorem technnogy lorem demo lorem technnogy",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 2,
            title: "Est stet emet ipsum stet clita rebum duo",
            category: "Technology",
            date: "January 01, 2015",
            des: "lorem technnogy lorem demo lorem technnogy lorem demo lorem technnogy lorem demo lorem technnogy",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        }
    ];

    const filteredItems = isMobile ? items.slice(0, 1) : items;

    const renderItems = filteredItems.map((item) =>{
        return <CardFeatured key={item.id} title={item.title} category={item.category} date={item.date} des={item.des} img={item.img}/>
    })

    return(
        <>
            <div className={cx('title')}>
                <p>Latest</p>
                <span>View All</span>
            </div>
            <div className={cx('latest')}>{renderItems}</div>
        </>
    );
}

export default Latest;