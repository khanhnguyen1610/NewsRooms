import React from 'react';
import styles from './Header.module.scss';
import className from 'classnames/bind';
import { NavLink } from 'react-router-dom'; 
import config from '../../../config';

const cx  = className.bind(styles);

function Header(){
    return (
        <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <h1><span>News</span>Room</h1>
                    <p>ads</p>
                </div>
            </div>
            <div className={cx('menu')}>
                <div className={cx('wrapper-menu')}>
                    <ul className={cx('menuList')}>
                        <NavLink to={config.routes.home} className={(nav) => cx('menuItem', {active: nav.isActive})}>Home </NavLink>
                        <NavLink to={config.routes.categories} className={(nav) => cx('menuItem', {active: nav.isActive})}>Categories</NavLink>
                        <NavLink to={config.routes.singleNews} className={(nav) => cx('menuItem', {active: nav.isActive})}>Single News</NavLink>
                        <li className={cx('menuItem')}>Drops Down</li>
                        <NavLink to={config.routes.contact} className={(nav) => cx('menuItem', {active: nav.isActive})}>Contact</NavLink>
                    </ul>
                    <div className={cx('search')}>
                        <div className={cx('search-box')}>
                            <input className={cx('search-input')} type="text"/>
                            <span>Q</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Header;