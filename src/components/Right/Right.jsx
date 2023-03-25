import React from "react";
import classes from "./Right.module.css";
import {AiOutlineClose} from 'react-icons/ai'
let a = "NoticePeriod"
a = a.split("")
const Right = () => {
  return (
    <div className={classes["right"]}>
      <div className={classes['right__wrapper']}>
      <div className={classes["right__heading"]}>
      <AiOutlineClose />
      <div className={classes['right__letter']}>
      {a.map((e,i)=>{
        return <div key={i} className={classes['right__content']}>{e}</div>
      })}
      </div>
      </div>
      <div className={classes["right__discription"]}></div>
      </div>
    </div>
  );
};

export default Right;
