import React from "react";
import Image from "next/image";
import style from "./index.module.scss";

const TopOfPage = () => {
  return (
    <div className={`${style.topofpage__wrapper} container`}>
      <div className={style.img__wrapper}>
        <Image src="/images/logo.png" width={378} height={72} alt="logo" />
      </div>
      <div className={style.contact__wrapper}>
        <div className={style.contact__details}>
          <span className={style.contact__number}>
            (+62) <strong>812-9917-8296</strong>
          </span>
          <span className={style.contact__email}>
            marketing@petraerkaperkasa.com
          </span>
        </div>
        <div className={style.contact__btn}>
          <a href="/">
            <Image
              src="/images/icons/phone-blue.png"
              width={25}
              height={25}
              alt="phone-icon"
            />
            <span>Kenjie</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopOfPage;
