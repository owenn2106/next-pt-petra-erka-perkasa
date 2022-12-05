import Image from "next/image";
import style from "./index.module.scss";

const Process = () => {
  return (
    <div className={style.process__wrapper}>
      <div className={`container ${style.procceses}`}>
        <div className={style.process}>
          <Image src="/images/icons/email-success.png" width={70} height={70} />
          <div className={style.text}>
            <p>Contact & consult</p>
          </div>
        </div>
        <div className={style.arrow}>
          <Image src="/images/icons/chevron-right.png" width={50} height={50} />
        </div>
        <div className={style.process}>
          <Image src="/images/icons/deal.png" width={70} height={70} />
          <div className={style.text}>
            <p>Get quotation & deal</p>
          </div>
        </div>
        <div className={style.arrow}>
          <Image src="/images/icons/chevron-right.png" width={50} height={50} />
        </div>
        <div className={style.process}>
          <Image src="/images/icons/process.png" width={70} height={70} />
          <div className={style.text}>
            <p>Get your order processed</p>
          </div>
        </div>
        <div className={style.arrow}>
          <Image src="/images/icons/chevron-right.png" width={50} height={50} />
        </div>
        <div className={style.process}>
          <Image src="/images/icons/shipped.png" width={100} height={70} />
          <div className={style.text}>
            <p>Done & shipped out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
