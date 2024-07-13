import React, { useEffect, useState } from "react";
import styles from '../common.module.scss';
import classNames from "classnames/bind";
import CategoriesCard from "../../../../components/CategogiesCard/CategoriesCard";
import {  RightOutlined, LeftOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function Business(){
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
            date: "Technology / January 01, 2015",
            des: "Sanctus amet sed ipsum lorem",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 2,
            date: "Technology / January 01, 2015",
            des: "Sanctus amet sed ipsum lorem",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
    ]

    const filteredItems = isMobile ? items.slice(0, 1) : items;

    const renderItem = filteredItems.map((item) =>{
        return <CategoriesCard key={item.id} id={item.id} date={item.date} des={item.des} img={item.img}/>
    })

    return (
        <>
            <div className={cx('title')}>
                <p>Business</p>
                <div><span><LeftOutlined /></span><span><RightOutlined /></span></div>
            </div>
            <div className={cx('card-wrapper')}>{renderItem}</div>
        </>
    )
}

export default Business;