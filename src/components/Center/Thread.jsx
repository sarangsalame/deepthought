import React from "react";
import { AiOutlineUp, AiFillBulb, AiOutlineDown } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GiFlowerEmblem } from "react-icons/gi";
import classes from "./Center.module.css";

const Thread = () => {
  return (
    <div className={classes["thread"]}>
      <div className={classes["thread__header"]}>
        <span>
          <AiOutlineUp />
        </span>
        <h2>Thread A</h2>
      </div>
      <div className={classes["thread__content"]}>
        <div className={classes["thread__content-subwrapper"]}>
          <div className={classes["thread__content-first"]}>Sub thread 1</div>
          <input
            type='textarea'
            placeholder='Enter Text here'
            className={classes["thread__content-sec"]}
          />
        </div>
        <div className={classes["thread__content-subwrapper"]}>
          <div className={classes["thread__content-first"]}>
            Sub Interpretation 1
          </div>
          <input
            type='textarea'
            placeholder='Enter Text here'
            className={classes["thread__content-sec"]}
          />
        </div>
      </div>
      <div className={classes["thread__btns-wrapperparent"]}>
        <div className={classes["thread__btns-wrapper"]}>
          <AiFillBulb />
          <MdMessage />
          <RiQuestionnaireFill />
          <GiFlowerEmblem />
          <div className={classes["btn__wrapper"]}>
            <button>
              Select Categ <AiOutlineDown style={{ fontWeight: "900" }} />
            </button>
            <button>
              Select process <AiOutlineDown />
            </button>
          </div>
        </div>
      </div>


      <div className={classes['thread__content-subwrapper-parent']}>
        <button type="button">+ Sub-thread</button>
        <div className={`${classes['thread__inp-width']} ${classes['thread__content-subwrapper']}`}>
          <div className={classes["thread__content-first"]}>
            Summary for Thread A
          </div>
          <input
            type='textarea'
            placeholder='Enter Text here'
            className={classes["thread__content-sec"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Thread;
