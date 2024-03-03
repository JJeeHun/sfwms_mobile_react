import React from 'react'
import css from './MenuHeader.module.css'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

const MenuHeader = ({companyName ,client ,warehouse ,menus}) => {
    const nav = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    if(pathName.includes('/login')) return '';



    const findMenu = menus.find(menu => menu.path === pathName);

  return (
    <header className={css.header}>
        <div className={css.title}>{findMenu ? findMenu.title : companyName}</div>
        <div className={css['right-info']}>
            <div className={css.info}>
                <span>{client}</span>
                <span>{warehouse}</span>
            </div>
            <div className="icon" onClick={() => {nav('/')}}>
                ▨
            </div>
        </div>
    </header>
  )
}

export default MenuHeader