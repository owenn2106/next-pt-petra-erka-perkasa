import Image from "next/image";
import style from "./index.module.scss";

const About = () => {
  return (
    <div className={`${style.about__wrapper} container`}>
      <div className={style.logo__wrapper}>
        <Image src="/images/logo.png" height={148} width={776} />
      </div>
      <div className={style.description__wrapper}>
        <p>
          PT Petra Erka Perkasa, a corrugated cardboard box manufacturer, was
          founded in 2001 and offers packaging solutions for practically every
          industry, including fully personalized packaging. With more than 20
          years of industry experience, we are confident that we can offer our
          customers cutting-edge items that are of the highest quality while
          remaining competitively priced. With a combined monthly output of 300+
          tons, our production facilities in Tangerang can accommodate both
          large and small firms.
        </p>
      </div>

      <div className={style.vision__mission}>
        <div className={style.image__wrapper}>
          <Image src="/images/petra/petra-1.png" width={568} height={491} />
        </div>
        <div className={style.text__wrapper}>
          <div className={style.vision}>
            <h3>Our vision</h3>
            <p>
              Being one of the cardboard box companies that can compete in
              quality and service.
            </p>
          </div>
          <div className={style.mission}>
            <h3>Our mission</h3>
            <p>1. Improve service continuously.</p>
            <p>2. Timely delivery.</p>
            <p>3. Maintain production quality.</p>
            <p>4. Fostering good relationships with customers and suppliers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
