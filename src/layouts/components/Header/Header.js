import React, { useState } from 'react';
import styles from './Header.module.scss';
import className from 'classnames/bind';
import { NavLink } from 'react-router-dom'; 
import config from '../../../config';
import { MonitorOutlined, MenuOutlined } from '@ant-design/icons';

const cx  = className.bind(styles);

function Header(){
    const [open, setOpen] = useState("");

    const handleMenuOpen = () =>{
        setOpen((prevOpen) => (prevOpen === "" ? "block" : ""));
    }

    const handleCloseMenu = () =>{
        setOpen("");
    }

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
                    <div className={cx('logo-mobile')}>
                        <h1><span>News</span>Room</h1>
                    </div>
                    <ul className={cx('menuList')} style={{"display": open}}>
                        <NavLink to={config.routes.home} className={(nav) => cx('menuItem', {active: nav.isActive})} onClick={handleCloseMenu}>Home </NavLink>
                        <NavLink to={config.routes.categories} className={(nav) => cx('menuItem', {active: nav.isActive})} onClick={handleCloseMenu}>Categories</NavLink>
                        <NavLink to={config.routes.singleNews} className={(nav) => cx('menuItem', {active: nav.isActive})} onClick={handleCloseMenu}>Single News</NavLink>
                        <li className={cx('menuItem')}>Drops Down</li>
                        <NavLink to={config.routes.contact} className={(nav) => cx('menuItem', {active: nav.isActive})} onClick={handleCloseMenu}>Contact</NavLink>
                    </ul>
                    <div className={cx('menu-mobile')} onClick={handleMenuOpen}><MenuOutlined /></div>
                    <div className={cx('search')}>
                        <div className={cx('search-box')}>
                            <input className={cx('search-input')} type="text" placeholder='Keyword'/>
                            <span><MonitorOutlined /></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Header;