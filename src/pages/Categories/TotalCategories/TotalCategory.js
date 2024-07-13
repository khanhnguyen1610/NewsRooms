import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from './TotalCategory.module.scss';
import { Pagination } from "antd";
import CommonCard from "../../../components/CommonCard/CommonCard";

const cx = classNames.bind(styles);

function TotalCategory(){
    const numEachPage = 4;
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(numEachPage);

    const dataItems = [
        {
            id: 1,
            title: "Est stet emet ipsum stet clita rebum duo 1",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 2,
            title: "Est stet emet ipsum stet clita rebum duo 2",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 3,
            title: "Est stet emet ipsum stet clita rebum duo 3",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 4,
            title: "Est stet emet ipsum stet clita rebum duo 4",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 5,
            title: "Est stet emet ipsum stet clita rebum duo 5",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 6,
            title: "Est stet emet ipsum stet clita rebum duo 6",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 7,
            title: "Est stet emet ipsum stet clita rebum duo 7",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 8,
            title: "Est stet emet ipsum stet clita rebum duo 8",
            category: "Technology",
            date: "January 01, 2015",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        }
    ];

    const handleChange = value => {
        setMinValue((value - 1) * numEachPage);
        setMaxValue(value * numEachPage);
    };

    const renderItems = dataItems && dataItems.length > 0 && dataItems.slice(minValue, maxValue)
    .map((item) => {
        return <CommonCard key={item.id} img={item.img} category={item.category} title={item.title} date={item.date}/>
    })

    console.log(renderItems);

    return(
        <>
            <div className={cx('wrapper')}>
                <div className={cx('total-category')}>
                {renderItems}
                </div>
                <Pagination 
                    defaultCurrent={1}
                    defaultPageSize={numEachPage} //default size of page
                    onChange={handleChange}
                    total={dataItems.length} //total number of card data available
                    align="center"
                />
            </div>
        </>
    )


}

export default TotalCategory;