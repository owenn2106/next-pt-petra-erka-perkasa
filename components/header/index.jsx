import Image from "next/image";
import style from "./index.module.scss";

const Header = () => {
  return (
    <div className={style.header__bg}>
      <div className={`container ${style.header__wrapper}`}>
        <div className={style.header__text}>
          <h1>Top-Quality</h1>
          <h1>Corrugated Box</h1>
          <p>
            Custom packaging and corrugated carton boxes can turn your brand
            into the total package with full customization, instant quoting, and
            fast turnarounds.
          </p>
          <a href="/" className={style.header__cta}>
            Consult Us
          </a>
        </div>
        <div className={style.header__img}>
          <Image
            src="/images/header-img.png"
            layout="fill"
            className={style.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
