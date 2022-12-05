import Image from "next/image";
import style from "./index.module.scss";

const Qualities = () => {
  return (
    <div className={`${style.qualities__wrapper} container`}>
      <div className={style.qualities__card}>
        <div className={style.card__title}>
          <div className={style.title__text}>
            <h3>Tiny minimums.</h3>
            <h3>No maximums.</h3>
          </div>
          <div className={style.title__img}>
            <Image
              src="/images/icons/infinity.png"
              height={50}
              width={50}
              alt="infinity"
            />
          </div>
        </div>
        <div className={style.card__content}>
          <p>
            No matter the size of your custom packaging order, you&apos;ll get
            the best boxes at prices to match.
          </p>
        </div>
      </div>
      <div className={style.qualities__card}>
        <div className={style.card__title}>
          <div className={style.title__text}>
            <h3>Pick your style.</h3>
            <h3>Design your boxes.</h3>
          </div>
          <div className={style.title__img}>
            <Image
              src="/images/icons/illustrator.png"
              height={50}
              width={50}
              alt="illustrator"
            />
          </div>
        </div>
        <div className={style.card__content}>
          <p>
            Customize your packaging according to what you need and what&apos;s
            best for your product.
          </p>
        </div>
      </div>
      <div className={style.qualities__card}>
        <div className={style.card__title}>
          <div className={style.title__text}>
            <h3>Quick and fast.</h3>
            <h3>Ready to use.</h3>
          </div>
          <div className={style.title__img}>
            <Image
              src="/images/icons/quick.png"
              height={50}
              width={50}
              alt="quick"
            />
          </div>
        </div>
        <div className={style.card__content}>
          <p>
            Fast response for consultation and on time delivery for you to start
            using.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
