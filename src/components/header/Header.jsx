import React from 'react'
import classes from './Header.module.css'
import part1 from '../../asset/part1.svg'
import part2 from '../../asset/part2.png'
import part3 from '../../asset/part3.svg'
import {FaHome, FaTools, FaBell} from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

import Avatar from 'react-avatar';
// import {IoNotifications} from 'react-icons/io'
const Header = () => {
    
  return (
    <header>
    <div className={classes['header__main-logo']}>
        <img className={classes['mainlogo']} src={part2} alt="logo"/>
        <img src={part1} alt="logo"/>
        <img src={part3} alt="logo"/>
    </div>
    <div className={classes['header__nav']}>
        <FaHome/>
        <FaTools/>
        <FaBell/>
        <Avatar className={classes['nav__avatar']} size="35" round={true} name="User" />
        <BsThreeDotsVertical className={classes['threedot_back']}/>
    </div>
    </header>
  )
}

export default Header