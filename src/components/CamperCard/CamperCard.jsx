import starActive from "../../img/starActive.svg";
import location from "../../img/map-active.svg";

import s from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  return (
    <ul>
      <li className={s.listOne}>
        <ul className={s.listTitle}>
          <li className={s.name}>{camper.name}</li>
          <li>
            <ul className={s.ratingLocation}>
              <li className={s.reviews}>
                <img className={s.locRev} src={starActive} alt="star" />
                {camper.rating} Reviews
              </li>
              <li className={s.reviews}>
                <img className={s.locImg} src={location} alt="location" />
                {camper.location}
              </li>
            </ul>
          </li>
          <li className={s.priceNumber}>€{camper.price}.00</li>
        </ul>
      </li>
      <li className={s.listImage}>
        {Array.isArray(camper.gallery) && camper.gallery.length > 0 && (
          <ul className={s.gallery}>
            {camper.gallery.map((trump) => (
              <li className={s.listImg} key={trump.thumb}>
                <img className={s.img} src={trump.thumb} alt="" />
              </li>
            ))}
          </ul>
        )}
      </li>
      <li className={s.description}>
        <p className={s.desc}>{camper.description}</p>
      </li>
    </ul>
  );
}
