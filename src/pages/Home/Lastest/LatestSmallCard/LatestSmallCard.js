import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from'./LatestSmallCard.module.scss'
import CommonCard from "../../../../components/CommonCard/CommonCard";

const cx = classNames.bind(styles);

function LatestSmallCard(){
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
        }
    ];

    const filteredItems = isMobile ? items.slice(0, 2) : items;

    const renderItems = filteredItems.map((item) =>{
        return <CommonCard key={item.id} img={item.img} category={item.category} title={item.title} date={item.date}/>
    })

    return(
        <div className={cx('wrapper')}>
            {renderItems}
        </div>
    );
}

export default LatestSmallCard;