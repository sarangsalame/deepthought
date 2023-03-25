import React from 'react'
import chatimg from '../../asset/image13.svg'
import classes from './Card.module.css'
const Image = () => {
  return (
    <div className={classes['img__warpper']}>
    <img src={chatimg} alt="img"/> 
    </div>
  )
}

export default Image