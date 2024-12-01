import { useEffect, useState } from "react";

import heart from "../../img/heart.svg";
import heartRed from "../../img/heartRed.svg";
import location from "../../img/map-active.svg";
import star from "../../img/starActive.svg";
import transmission from "../../img/Transmission.svg";
import petrol from "../../img/Petrol.svg";
import kitchen from "../../img/Kitchen.svg";
import ac from "../../img/AC.svg";

import s from "./Camper.module.css";

export default function Camper({ camper }) {
  const [isAdd, setIsAdd] = useState(false);

  const handleShowMore = () => {
    window.open(`/catalog/${camper.id}`, "_blank");
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const added = JSON.parse(localStorage.getItem("added")) || [];
    setIsAdd(added.includes(camper.id));
  }, [camper.id]);

  const toggleAdd = () => {
    let added = JSON.parse(localStorage.getItem("added")) || [];
    if (isAdd) {
      added = added.filter((id) => id !== camper.id);
    } else {
      added.push(camper.id);
    }
    localStorage.setItem("added", JSON.stringify(added));
    setIsAdd(!isAdd);
  };

  const firstImage = camper.gallery[0] ? camper.gallery[0].thumb : null;
  const description =
    camper.description.length > 64
      ? camper.description.slice(0, 63) + "..."
      : camper.description;

  return (
    <div className={s.camper}>
      <img className={s.img} src={firstImage} alt="first" />
      <div>
        <div>
          <ul className={s.title}>
            <h2 className={s.name}>{camper.name}</h2>
            <div className={s.price}>
              <li className={s.priceNumber}>€{camper.price.toFixed(2)}</li>
              <li>
                <button className={s.buttonHeart} onClick={toggleAdd}>
                  <img src={isAdd ? heartRed : heart} alt="heart" />
                </button>
              </li>
            </div>
          </ul>
          <ul className={s.ratingLocation}>
            <li className={s.reviews}>
              <img className={s.locRev} src={star} alt="star" />
              {camper.rating} ({camper.reviews.length}) Reviews
            </li>
            <li className={s.reviews}>
              <img className={s.locImg} src={location} alt="location" />
              {camper.location}
            </li>
          </ul>
        </div>
        <p className={s.description}>{description}</p>
        <ul className={s.characters}>
          <li className={s.character}>
            <div className={s.iconCharacters}>
              <img className={s.iconCharacter} src={transmission} alt="" />
              <p className={s.nameCharacter}>
                {capitalizeFirstLetter(camper.transmission)}
              </p>
            </div>
          </li>
          <li className={s.character}>
            <div className={s.iconCharacters}>
              <img className={s.iconCharacter} src={petrol} alt="fuel" />
              <p className={s.nameCharacter}>
                {capitalizeFirstLetter(camper.engine)}
              </p>
            </div>
          </li>
          {camper.kitchen && (
            <li className={s.character}>
              <div className={s.iconCharacters}>
                <img className={s.iconCharacter} src={kitchen} alt="kitchen" />
                <p className={s.nameCharacter}>Kitchen</p>
              </div>
            </li>
          )}
          {camper.AC && (
            <li className={s.character}>
              <div className={s.iconCharacters}>
                <img className={s.iconCharacter} src={ac} alt="AC" />
                <p className={s.nameCharacter}>AC</p>
              </div>
            </li>
          )}
        </ul>
        <button className={s.buttonShow} onClick={handleShowMore} type="submit">
          Show more
        </button>
      </div>
    </div>
  );
}
