import React from "react";
import classes from "./CardfourContent.module.css";
import { AiOutlineUp } from "react-icons/ai";
const CardFourContent = () => {
  return (
    <div className={classes["card__four-content"]}>
      <div className={classes["intro__header-wrapper"]}>
        <div className={classes["intro__header"]}>
          <span>
            <AiOutlineUp />
          </span>
          <h2>Introduction</h2>
        </div>

        <div className={classes["blank__content"]}>
          <p>The 4SA Method , How to bring a idea into progress ?</p>
          <span>See More</span>
        </div>
      </div>

      <div className={classes["intro__header-wrapper"]}>
        <div className={classes["intro__header"]}>
          <span>
            <AiOutlineUp />
          </span>
          <h2>Thread A</h2>
        </div>

        <div className={classes["blank__content"]}>
          <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
          <span>See More</span>
        </div>
      </div>

      <div className={classes["intro__header-wrapper"]}>
        <div className={classes["intro__header"]}>
          <h2>Example</h2>
        </div>

        <div className={classes["blank__content"]}>
          <p>You have a concept , How will you put into progress?</p>
        </div>
      </div>
    </div>
  );
};

export default CardFourContent;
