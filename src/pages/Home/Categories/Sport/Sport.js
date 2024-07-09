import React from "react";
import styles from '../common.module.scss';
import classNames from "classnames/bind";
import CategoriesCard from "../../../../components/CategogiesCard/CategoriesCard";

const cx = classNames.bind(styles);

function Sport(){
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

    const renderItem = items.map((item) =>{
        return <CategoriesCard key={item.id} date={item.date} des={item.des} img={item.img}/>
    })

    return (
        <>
            <div className={cx('title')}>
                <p>Sport</p>
                <div><span>x</span><span>x</span></div>
            </div>
            <div className={cx('card-wrapper')}>{renderItem}</div>
        </>
    )
}

export default Sport;