import FluteCard from "./flute-card";
import style from "./index.module.scss";

const Flutes = () => {
  const data = [
    {
      img: "/images/flutes/a-flute.png",
      title: "A-flute",
      description:
        "Type A cardboard has excellent compression and cushioning as well as good stacking strength. It is great for packaging fragile items and is commonly used for structural strength.",
    },
    {
      img: "/images/flutes/b-flute.png",
      title: "B-flute",
      description:
        "Type B cardboard has excellent crush and puncture resistance and is a great printing surface. This cardboard is commonly used for inner packaging components such as pads and partitions.",
    },
    {
      img: "/images/flutes/c-flute.png",
      title: "C-flute",
      description:
        "Type C cardboard makes a good printing surface. It also has compression properties and offers crush resistance. It is most commonly used for shipping boxes and to secure glass, furniture, food, etc.",
    },
    {
      img: "/images/flutes/e-flute.png",
      title: "E-flute",
      description:
        "Type E cardboard&apos;s thin construction helps to reduce storage space. It has excellent crush resistance and an exceptional printing surface. It is commonly used for displays, pizza boxes, ballot boxes, and packaging of consumer goods such as glass, ceramics, and cosmetics.",
    },
    {
      img: "/images/flutes/f-flute.png",
      title: "F-flute",
      description:
        "Type F cardboard has an outstanding printing surface and excellent crush resistance. Its thin construction allows for stiffer boxes with less fiber. It is commonly used in fast food clamshell containers and packaging for consumer goods such as cosmetics, jewelry, and shoes.",
    },
  ];

  return (
    <div className={`${style.flutes__wrapper} container`}>
      <div className={style.flutes__header}>
        <h2 className={style.flutes__title}>Corrugated flute styles</h2>
        <p className={style.flutes__short_desc}>
          *note that all measurements are approximations
        </p>
      </div>
      <div className={style.flutes__content}>
        {data.map((datum, idx) => (
          <FluteCard
            key={idx}
            img={datum.img}
            title={datum.title}
            desc={datum.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Flutes;
