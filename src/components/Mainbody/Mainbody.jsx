import React from 'react'
import Center from '../Center/Center'
import Left from '../Left/Left'
import Right from '../Right/Right'
import classes from './Mainbody.module.css'
import { AiFillQuestionCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";
const Mainbody = () => {
  return (
    <div className={classes['mainbody']}>
    <Left/>
    <Center/>
    <Right/>
    <div className={classes["right__corner"]}>
          <AiFillQuestionCircle round="true" />
          <HiOutlineUserGroup />
          <BsCalendar3 />
        </div>
    </div>
  )
}

export default Mainbody