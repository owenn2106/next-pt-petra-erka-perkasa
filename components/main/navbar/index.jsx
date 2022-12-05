import React from "react";
import style from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={style.nav__background}>
      <ul className={`${style.nav__links} container`}>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">ABOUT</a>
        </li>
        <li>
          <a href="/">PRODUCTS</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
