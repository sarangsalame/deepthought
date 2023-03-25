import React, { useState } from "react";
import classes from "./Left.module.css";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'
const Left = () => {
  const [leftbar, setleftbar] = useState(true);
  return (
    <div className={classes["left"]} onClick={()=>setleftbar(!leftbar)}>
      
        {leftbar ? 
          <>
          <div className={classes["left__wrapper"]}>
            <div className={classes["left__heading"]}>
              <BsFillArrowRightCircleFill/>
            </div>
            <div className={classes["left__discription"]}>
              <span>1</span>
            </div>
            </div>
          </>
         : 
          <>
            <div className={classes["left__wrapper-long"]}>
              <div className={classes["left__heading-long"]}>Journey Board <BsFillArrowLeftCircleFill/></div>
              <div className={classes["left__discription-long"]}>
               <li>Explore the world of management</li>
                <li>Technical Project Management</li>
                <li>Threadbuild</li>
                <li>Structure your pointers</li>
                <li>4SA Method</li>
              </div>
            </div>
          </>
        }
      </div>
    
  );
};

export default Left;
