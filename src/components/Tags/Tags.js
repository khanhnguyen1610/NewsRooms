import React from "react";
import classNames from "classnames/bind";
import styles from './Tags.module.scss';

const cx = classNames.bind(styles);

function Tags({head}){
    const tags = [
        {id: 1, key: "politics"},
        {id: 2, key: "Business"},
        {id: 3, key: "Corporate"},
        {id: 4, key: "Sports"},
        {id: 5, key: "Health"},
        {id: 6, key: "Education"},
        {id: 7, key: "Science"},
        {id: 8, key: "Technology"},
        {id: 9, key: "Foods"},
        {id: 10, key: "Entertainment"},
        {id: 11, key: "Travel"},
        {id: 12, key: "Lifestyle"},
    ]

    const renderTags = tags.map((tag) =>{
        return <span key={tag.id}>{tag.key}</span>
    })

    return (
        <>
            <div className={cx('title')}>
                <p>{head}</p>
            </div>
            <div className={cx('tags')}>
                {renderTags}
            </div>
        </>
    )
}

export default Tags;