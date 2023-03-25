import React from "react";
import Card from "../Card/Card";
import CenterHeader from "../CenterHeader/CenterHeader";
import classes from "./Center.module.css";
import Image from "../Card/Image";
import Thread from "./Thread";
import TextCont from "./TextCont";
import CardFourContent from "./CardFourContent";

const Center = () => {
  return (
    <>
      <div className={classes["center__container"]}>
        <CenterHeader />
        <div className={classes["card__wrapper"]}>
          <Card
            heading={"Technical Project Management"}
            discription={
              "Story of Alignment Scope of Agility Specific Accountable Staggering Approach"
            }
          >
            <Image />
          </Card>

          <Card
            heading={"Threadbuild"}
            discription={
              "Watch the video and threadbuild, and jot out key threads while watching the video"
            }
          >
            <Thread />
          </Card>

          <Card
            heading={"Structure your Pointers"}
            discription={
              "Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world "
            }
          >
            <TextCont />
          </Card>

          <Card
            heading={"4SA Method"}
            discription={"To Explore more read more "}
          >
          <CardFourContent/>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Center;
