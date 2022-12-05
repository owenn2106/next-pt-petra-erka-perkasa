import { useEffect } from "react";

import style from "./index.module.scss";

const Modal = ({ open, onClose, ...props }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div
      className={`${style.modal} ${open ? style.open : ""}`}
      onClick={onClose}
    >
      <div className={style.modal__content}>
        <p className={style.modal__close}>Click anywhere to close</p>
        <div className={style.modal__body}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
