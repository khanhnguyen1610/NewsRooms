import React from "react";
import styles from './Categories.module.scss';
import classNames from "classnames/bind";
import Card from "./Card";
import useProducts from '../../../services/useProduct';

const cx = classNames.bind(styles);

function Categories(){
    
    const { products } = useProducts();

    const renderCategories = products.map((category) =>{
        return <Card key={category.id} category={category.category} img={category.image}/>
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