import React from 'react'
import {BsThreeDots, BsArrow90DegRight} from 'react-icons/bs'
import {MdZoomOutMap} from 'react-icons/md'
import classes from './TextCount.module.css'
const TextCont = () => {
  return (
    <div className={classes["textcont"]}>
        <div className={classes["textcont__header"]}>
            <h3>Title</h3>
            <input type="text"/>
        </div>
        <div className={classes["textcont__content-wrapper"]}>
            <h3>Content</h3>
            <div className={classes["textcont__content-first"]}>
                <ul>
                    <li>File</li>
                    <li>Edit</li>
                    <li>View</li>
                    <li>Insert</li>
                    <li>Format</li>
                    <li>Tools</li>
                    <li>Table</li>
                    <li>Help</li>
                </ul>
                <div className={classes["textcont__content-sec"]}>
                    <BsArrow90DegRight style={{"rotate":"-90deg"}}/>
                    <BsArrow90DegRight />
                    <MdZoomOutMap/>
                    <span>Paragraph</span>
                    <BsThreeDots/>
                
                </div>
            </div>
            <input type="text"/>
        </div>
    
    </div>
  )
}

export default TextCont