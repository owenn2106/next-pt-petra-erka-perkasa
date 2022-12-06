import React from "react";
import style from "./index.module.scss";

const Loader = () => {
  return (
    <div className={style.background}>
      <div className={style.scene}>
        <div className={style.cube_wrapper}>
          <div className={style.cube}>
            <div className={style.cube_faces}>
              <div className={`${style.cube_face} ${style.shadow}`}></div>
              <div className={`${style.cube_face} ${style.bottom}`}></div>
              <div className={`${style.cube_face} ${style.top}`}></div>
              <div className={`${style.cube_face} ${style.left}`}></div>
              <div className={`${style.cube_face} ${style.right}`}></div>
              <div className={`${style.cube_face} ${style.back}`}></div>
              <div className={`${style.cube_face} ${style.front}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
