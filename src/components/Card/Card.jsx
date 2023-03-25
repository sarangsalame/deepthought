import React from 'react'
import classes from './Card.module.css'
import {GrCircleInformation} from 'react-icons/gr'
const Card = ({heading, discription, children}) => {
  return (
    <div className={classes['card']}>
        <div className={classes['card__heading']}>{heading}
          <div className={classes['info__icon-wrapper']}><GrCircleInformation/></div>
        </div>
        <div className={classes['card__discription']}>
        <span>Discription: </span>
        <p>{discription}</p>
        </div>
    {children}
    </div>
  )
}

export default Card