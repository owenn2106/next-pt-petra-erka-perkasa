import style from "./index.module.scss";
import TypeCard from "./type-card";

const Types = () => {
  const data = [
    {
      img: "/images/types/corrugated-1.webp",
      title: "Single Face Corrugated",
      preview: "Made of a single flute and 1 or 2 sheets of linear board.",
      description:
        "Single face board has only two layers, a liner layer and a corrugated layer. It's not as durable as the other types of corrugated cardboard but is often used inside of boxes to add extra cushioning.",
      usage: ["Interior packaging"],
      flutes: ["A", "B", "C", "F"],
    },
    {
      img: "/images/types/corrugated-2.webp",
      title: "Single Wall Corrugated",
      preview:
        "Made of a layer of corrugated medium glued between 2 sheets of liner board.",
      description:
        "Single wall board is the most common type of corrugated cardboard. If someone is talking about corrugated cardboard, they are most likely referring to this style. It consists of two outer liners and a middle layer of corrugated medium.",
      usage: ["Shipping cartons"],
      flutes: ["A", "B", "C", "F"],
    },
    {
      img: "/images/types/corrugated-3.webp",
      title: "Double Wall Corrugated",
      preview:
        "Made of a 2 layer of corrugated medium glued between 3 layers of liner board.",
      description:
        "Double wall board has two layers of corrugated fluting and three liners, making it extremely durable.",
      usage: ["Industrial cartons"],
      flutes: ["BC", "EB"],
    },
    {
      img: "/images/types/corrugated-4.webp",
      title: "Triple Wall Corrugated",
      preview:
        "Made of 3 layers of corrugated medium and 4 layers of liner board.",
      description:
        "Triple wall board sturdy enough to be used in place of wooden crates. Three layers of fluting make this corrugated cardboard a dependable choice for shipping chemicals or items that need special handling.",
      usage: ["Shipping crates", "chemical containers"],
      flutes: ["BBC"],
    },
  ];
  return (
    <div className={`${style.types__wrapper} container`} id="products">
      <h2 className={style.types__title}>Types of corrugated boxes</h2>
      <div className={style.type__content}>
        {data.map((datum, idx) => (
          <TypeCard
            key={idx}
            img={datum.img}
            title={datum.title}
            preview={datum.preview}
            desc={datum.description}
            usage={datum.usage}
            flutes={datum.flutes}
          />
        ))}
      </div>
    </div>
  );
};

export default Types;
