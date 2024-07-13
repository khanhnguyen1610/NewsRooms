import React from "react";
import classNames from "classnames/bind";
import styles from './QuickLink.module.scss';
import { Collapse } from "antd";

const cx = classNames.bind(styles);

function QuickLink(){

    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `;
    const items = [
        {
            key: '1',
            label: 'About',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'Advertise',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'Contact',
            children: <p>{text}</p>,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };

    const renderLink = <Collapse items={items} bordered={false} size="small" onChange={onChange} collapsible='header' ghost/>;
    return(
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <p>Quick Link</p>
            </div>
            <div className={cx('link')}>
                {renderLink}
            </div>
        </div>
    )
}

export default QuickLink;