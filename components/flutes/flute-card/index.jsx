import Image from "next/image";
import style from "./index.module.scss";

const FluteCard = ({ img, title, desc }) => {
  return (
    <div className={style.card__wrapper}>
      <div className={style.img__wrapper}>
        <Image src={img} width={305} height={146} alt="flute-img" />
      </div>
      <div className={style.text__wrapper}>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
        <div className={style.desc}>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FluteCard;
