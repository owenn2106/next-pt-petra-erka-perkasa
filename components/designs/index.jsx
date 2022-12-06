import style from "./index.module.scss";

const Designs = () => {
  return (
    <div className={`${style.designs__wrapper} container`}>
      <h2 className={style.designs__title}>Box design that inspires</h2>
      <div className={style.desc}>
        <p>
          We&apos;re here to help with packaging solutions that make sense for
          businesses of any kind. Whether you&apos;re designing custom retail
          packaging with your logo or need corrugated cardboard mailers for your
          ecommerce biz, there&apos;s lots of inspiration to be found for your
          custom product packaging.
        </p>
      </div>
      <div className={style.grid__wrapper}>
        <div className={style.image__grid}>
          <figure className={`${style.image} ${style.image__1}`}>
            <img
              src="/images/boxes/1.webp"
              className="gallery__img"
              alt="Image 1"
            />
          </figure>
          <figure className={`${style.image} ${style.image__2}`}>
            <img
              src="/images/boxes/2.webp"
              className="gallery__img"
              alt="Image 2"
            />
          </figure>
          <figure className={`${style.image} ${style.image__3}`}>
            <img
              src="/images/boxes/3.webp"
              className="gallery__img"
              alt="Image 3"
            />
          </figure>
          <figure className={`${style.image} ${style.image__4}`}>
            <img
              src="/images/boxes/4.webp"
              className="gallery__img"
              alt="Image 4"
            />
          </figure>
          <figure className={`${style.image} ${style.image__5}`}>
            <img
              src="/images/boxes/5.webp"
              className="gallery__img"
              alt="Image 5"
            />
          </figure>
          <figure className={`${style.image} ${style.image__6}`}>
            <img
              src="/images/boxes/6.webp"
              className="gallery__img"
              alt="Image 6"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Designs;
