import Image from "next/image";
import style from "./index.module.scss";

const Footer = () => {
  return (
    <>
      <div className={style.footer__wrapper}>
        <div className={style.footer__bg}>
          <Image
            src="/images/footer-bg.webp"
            layout="fill"
            className={style.image}
            alt="footer-bg"
          />
        </div>
        <div className={style.footer__content} id="contact">
          <div className={style.footer__logo}>
            <Image
              src="/images/logo.webp"
              layout="fill"
              className={style.image}
              alt="logo"
            />
          </div>
          <div className={style.footer__text}>
            <h2>Chat with us or have a visit</h2>
            <div className={style.footer__contact}>
              <div className={style.phone}>
                <img src="/images/icons/phone.webp" alt="phone-icon" />
                <p>+62-21-5937-6688 | +62-21-5937-8283</p>
              </div>
              <div className={style.email}>
                <img src="/images/icons/email.webp" alt="email-icon" />
                <p>marketing@petraerkaperkasa.com</p>
              </div>
              <div className={style.address}>
                <img src="/images/icons/address.webp" alt="address-icon" />
                <p>
                  Jl. Rawa Kopi Raya (H. Jamin Sahip) No. 9 RT 002 RW 001 Desa
                  Kalibaru Kec. Pakuhaji, Tanggerang Kab Tangerang - Banten
                  15570
                </p>
              </div>
              <div className={style.time}>
                <img src="/images/icons/time.webp" alt="address-icon" />
                <div className={style.time__wrapper}>
                  <div className={style.day}>
                    <p>Monday - Friday</p>
                    <p>
                      <strong>08:00 - 16:00</strong>
                    </p>
                  </div>
                  <div className={style.day}>
                    <p>Saturday</p>
                    <p>
                      <strong>08:00 - 11:30</strong>
                    </p>
                  </div>
                  <div className={style.day}>
                    <p>Sunday</p>
                    <p>
                      <strong>Closed</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.gmaps__barcode}>
                <div className={style.barcode}>
                  <Image
                    src="/images/gmaps-barcode.webp"
                    width={150}
                    height={150}
                    alt="gmaps-barcode"
                  />
                </div>
                <div className={style.barcode__text}>
                  <p>
                    <strong>Scan me to open maps!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <p>Copyright by PT Petra Erka Perkasa 2022</p>
      </div>
    </>
  );
};

export default Footer;
