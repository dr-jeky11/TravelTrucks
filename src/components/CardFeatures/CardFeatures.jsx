import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSelectedCamper } from "../../redux/Catalog/selectors";
import { useEffect } from "react";

import { idCamper } from "../../redux/operations";

import transmission from "../../img/Transmission.svg";
import petrol from "../../img/petrol.svg";
import kitchen from "../../img/kitchen.svg";
import ac from "../../img/ac.svg";
import radio from "../../img/radio.svg";
import bathroom from "../../img/bathroom.svg";
import refrigerator from "../../img/refrigerator.svg";
import microwave from "../../img/Microwave.svg";
import gas from "../../img/Gas.svg";
import water from "../../img/water.svg";

import s from "./CardFeature.module.css";

import Form from "../Form/Form";

export default function CardFeature() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);

  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    dispatch(idCamper(id));
  }, [id, dispatch]);

  return (
    <div className={s.position}>
      <div className={s.container}>
        <ul className={s.characters}>
          <li className={s.character}>
            <div className={s.iconCharacters}>
              <img
                className={s.iconCharacter}
                src={transmission}
                alt="automatic"
              />
              <p className={s.nameCharacter}>
                {capitalizeFirstLetter(camper.transmission)}
              </p>
            </div>
          </li>
          <li className={s.character}>
            <div className={s.iconCharacters}>
              <img className={s.iconCharacter} src={petrol} alt="pump" />
              <p className={s.nameCharacter}>
                {capitalizeFirstLetter(camper.engine)}
              </p>
            </div>
          </li>
          {camper.kitchen && (
            <li className={s.character}>
              <div className={css.iconCharacters}>
                <img
                  className={css.iconCharacter}
                  src={kitchen}
                  alt="kitchen"
                />
                <p className={css.nameCharacter}>Kitchen</p>
              </div>
            </li>
          )}
          {camper.AC && (
            <li className={s.character}>
              <div className={s.iconCharacters}>
                <img className={s.iconCharacter} src={ac} alt="ac" />
                <p className={s.nameCharacter}>AC</p>
              </div>
            </li>
          )}
          {camper.radio && (
            <li className={s.character}>
              <div className={css.iconCharacters}>
                <img className={css.iconCharacter} src={radio} alt="radio" />
                <p className={css.nameCharacter}>Radio</p>
              </div>
            </li>
          )}
          {camper.bathroom && (
            <li className={s.character}>
              <div className={s.iconCharacters}>
                <img
                  className={s.iconCharacter}
                  src={bathroom}
                  alt="bathroom"
                />
                <p className={s.nameCharacter}>Bathroom</p>
              </div>
            </li>
          )}
          {camper.refrigerator && (
            <li className={s.character}>
              <div className={s.iconCharacters}>
                <img
                  className={s.iconCharacter}
                  src={refrigerator}
                  alt="refrigerator"
                />
                <p className={s.nameCharacter}>Refrigerator</p>
              </div>
            </li>
          )}
          {camper.microwave && (
            <li className={s.character}>
              <div className={s.iconCharacters}>
                <img
                  className={s.iconCharacter}
                  src={microwave}
                  alt="microwave"
                />
                <p className={css.nameCharacter}>Microwave</p>
              </div>
            </li>
          )}
          {camper.gas && (
            <li className={s.character}>
              <div className={s.iconCharacters}>
                <img className={s.iconCharacter} src={gas} alt="gas" />
                <p className={s.nameCharacter}>Gas</p>
              </div>
            </li>
          )}
          {camper.water && (
            <li className={s.character}>
              <div className={s.iconCharacters}>
                <img className={s.iconCharacter} src={water} alt="water" />
                <p className={s.nameCharacter}>Water</p>
              </div>
            </li>
          )}
        </ul>
        <div>
          <p className={s.titleVehicle}>Vehicle details</p>
          <hr className={s.line} />
          <ul className={s.list}>
            <li className={s.item}>
              <p className={s.detailsForm}>Form</p>
              <p className={s.detailsTruck}>Panel truck</p>
            </li>
            <li className={s.item}>
              <p className={s.detailsForm}>Length</p>
              <p className={s.detailsTruck}>{camper.length}</p>
            </li>
            <li className={s.item}>
              <p className={s.detailsForm}>Width</p>
              <p className={s.detailsTruck}>{camper.width}</p>
            </li>
            <li className={s.item}>
              <p className={s.detailsForm}>Height</p>
              <p className={s.detailsTruck}>{camper.height}</p>
            </li>
            <li className={s.item}>
              <p className={s.detailsForm}>Tank</p>
              <p className={s.detailsTruck}>{camper.tank}</p>
            </li>
            <li className={s.item}>
              <p className={s.detailsForm}>Consumption</p>
              <p className={s.detailsTruck}>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}
