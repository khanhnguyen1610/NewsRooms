import React from "react";
import styles from './Categories.module.scss';
import classNames from "classnames/bind";
import Card from "./Card";

const cx = classNames.bind(styles);

function Categories(){
    const categories = [
        {
            id: 1,
            title: "Technology",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 2,
            title: "Business",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 3,
            title: "Entertainment",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        },
        {
            id: 4,
            title: "Sport",
            img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        }
    ]

    const renderCategories = categories.map((category) =>{
        return <Card key={category.id} category={category.title} img={category.img}/>
    })

    return (
        <div>
            <div className={cx('title')}>
                <p>Categories</p>
                <span>View All</span>
            </div>
            <div className={cx('categories')}>{renderCategories}</div>
        </div>
    );
}

export default Categories;