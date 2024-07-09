import React from "react";
import Card from "./Card";
import styles from './CarouselMiddle.module.scss';
import classNames from "classnames/bind";
import Carousels from "../../../../components/Carousels/Carousels";

const cx = classNames.bind(styles);

function CarouselMiddle(){
    const items = [
        {
            id: 1,
            date: "Technology / January 01, 2025",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image"
        },
        {
            id: 2,
            date: "Technology / January 01, 2025",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image"
        },
        {
            id: 3,
            date: "Technology / January 01, 2025",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image"
        },
        {
            id: 4,
            date: "Technology / January 01, 2025",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image"
        },
        {
            id: 5,
            date: "Technology / January 01, 2025",
            img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            text: "lorem the image"
        }
    ]

    const renderItem = items.map(item => {
        return <Card key={item.id} date={item.date} des={item.text} img={item.img}/>;
    });

    return(
        <div className={cx('carousel')}>
            <div className={cx('Title')}>
                <p>Featured</p>
                <span>View All</span>
            </div>
            <Carousels itemss={renderItem} length={4}/>
        </div>
    )
}

export default CarouselMiddle;