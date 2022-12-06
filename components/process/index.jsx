import Image from "next/image";
import style from "./index.module.scss";

const Process = () => {
  return (
    <div className={style.process__wrapper}>
      <div className={`container ${style.procceses}`}>
        <div className={style.process}>
          <Image
            src="/images/icons/email-success.webp"
            width={70}
            height={70}
            alt="email-success"
          />
          <div className={style.text}>
            <p>Contact & consult</p>
          </div>
        </div>
        <div className={style.arrow}>
          <Image
            src="/images/icons/chevron-right.webp"
            width={50}
            height={50}
            alt="chevron-right"
          />
        </div>
        <div className={style.process}>
          <Image
            src="/images/icons/deal.webp"
            width={70}
            height={70}
            alt="handshake-deal"
          />
          <div className={style.text}>
            <p>Get quotation & deal</p>
          </div>
        </div>
        <div className={style.arrow}>
          <Image
            src="/images/icons/chevron-right.webp"
            width={50}
            height={50}
            alt="chevron-right"
          />
        </div>
        <div className={style.process}>
          <Image
            src="/images/icons/process.webp"
            width={70}
            height={70}
            alt="process"
          />
          <div className={style.text}>
            <p>Get your order processed</p>
          </div>
        </div>
        <div className={style.arrow}>
          <Image
            src="/images/icons/chevron-right.webp"
            width={50}
            height={50}
            alt="chevron-right"
          />
        </div>
        <div className={style.process}>
          <Image
            src="/images/icons/shipped.webp"
            width={100}
            height={70}
            alt="shipped-out"
          />
          <div className={style.text}>
            <p>Done & shipped out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
