import { useState } from "react";
import Modal from "./modal";
import Image from "next/image";
import style from "./index.module.scss";

const TypeCard = ({ img, title, preview, desc, usage, flutes }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={style.card__wrapper}>
      <div className={style.image__wrapper}>
        <Image src={img} height={80} width={150} />
      </div>
      <div className={style.text__wrapper}>
        <h3>{title}</h3>
        <p>{preview}</p>
      </div>
      <span className={style.details__btn} onClick={() => setOpen(true)}>
        More details...
      </span>
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <div className={style.modal__img}>
          <img src={img} />
        </div>
        <div className={style.modal__title}>
          <h2>{title}</h2>
        </div>
        <div className={style.modal__description}>
          <div className={style.desc}>
            <p>{desc}</p>
          </div>
          <div className={style.usage}>
            <p>
              <strong>Usual usage:</strong> {usage.join(", ")}
            </p>
          </div>
          <div className={style.flutes}>
            <p>
              <strong>Usual flute style:</strong> {flutes.join(", ")}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TypeCard;
