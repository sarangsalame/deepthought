import React from 'react'
import classes from './CenterHeader.module.css'
const CenterHeader = () => {
  return (
    <div className={classes['center__header']}>
        <div className={classes['center__head-section']}>
            <h2>Technical Project Management</h2>
            <button>Submit Task</button>
        </div>
        <div className={classes['center__content-section']}>
        <h3>Explore the world of management</h3>
        <p>As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
        </div>
    
    </div>
  )
}

export default CenterHeader