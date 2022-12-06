import React, { useEffect } from "react";
import Image from "next/image";
import style from "./index.module.scss";

const TopOfPage = () => {
  return (
    <div className={`${style.topofpage__wrapper} container`}>
      <div className={style.img__wrapper}>
        <Image
          src="/images/logo.webp"
          layout="fill"
          alt="logo"
          className={style.image}
        />
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
          <a
            href="https://wa.me/6281299178296"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/phone-blue.webp"
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
