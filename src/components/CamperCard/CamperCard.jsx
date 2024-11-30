import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import s from "../CamperCard/CamperCard.module.css";

export default function CamperCard({ camper }) {
  const features = [
    { label: "Kitchen", value: camper.kitchen },
    { label: "Bathroom", value: camper.bathroom },
    { label: "AC", value: camper.AC },
    { label: "Gas", value: camper.gas },
    { label: "Microwave", value: camper.microwave },
    { label: "Refrigerator", value: camper.refrigerator },
    { label: "Water", value: camper.water },
    { label: "Radio", value: camper.radio },
  ];

  const visibleFeatures = features
    .filter((feature) => feature.value)
    .slice(0, 2);

  return (
    <div className={s.camperCard}>
      <aside className={s.aside}>
        <img
          className={s.pic}
          src={camper.gallery[0].original}
          alt="Camper"
          width={292}
          height={320}
        />
      </aside>
      <div className={s.wrap}>
        <h2 className={s.title}>{camper.name}</h2>
        <p className={s.price}>${camper.price}.00</p>
      </div>
      <p className={s.reviews}>
        {camper.rating}({camper.reviews.length} Reviews) {camper.location}
      </p>
      <p className={s.description}>{camper.description}</p>
      <ul className={s.cardList}>
        <li className={s.listItem}>{camper.transmission}</li>
        <li className={s.listItem}>{camper.engine}</li>
        {visibleFeatures.map((feature, index) => (
          <li key={index} className={s.listItem}>
            {feature.label}
          </li>
        ))}
      </ul>
      <NavLink to={`/catalog/${camper.id}`} className={s.link}>
        Show more
      </NavLink>
    </div>
  );
}
CamperCard.propTypes = {
  camper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    price: PropTypes.number,
    reviews: PropTypes.array,
    location: PropTypes.string,
    description: PropTypes.string,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    kitchen: PropTypes.bool,
    bathroom: PropTypes.bool,
    AC: PropTypes.bool,
    gas: PropTypes.bool,
    microwave: PropTypes.bool,
    refrigerator: PropTypes.bool,
    water: PropTypes.bool,
    radio: PropTypes.bool,
    gallery: PropTypes.array,
    id: PropTypes.string,
  }).isRequired,
};
