import { useState } from "react";

import ac from "../../img/AC.svg";
import transmission from "../../img/Transmission.svg";
import kitchen from "../../img/Kitchen.svg";
import tv from "../../img/TV.svg";
import bathroom from "../../img/Bathroom.svg";

import s from "./Equipment.module.css";

export default function Equipment({ onChange, selectedValues = [] }) {
  const [checkedItems, setCheckedItems] = useState(new Set(selectedValues));

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    const newCheckedItems = new Set(checkedItems);
    if (checked) {
      newCheckedItems.add(value);
    } else {
      newCheckedItems.delete(value);
    }

    setCheckedItems(newCheckedItems);
    onChange(e);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <hr className={s.line} />
      <ul className={s.list}>
        <li className={s.item}>
          <label
            className={`${s.label} ${checkedItems.has("AC") ? s.checked : ""}`}>
            <input
              type="checkbox"
              name="equipment"
              value="AC"
              onChange={handleCheckboxChange}
              checked={checkedItems.has("AC")}
              className={s.input}
            />
            <img className={s.img} src={ac} alt="AC" />
            <p className={s.ac}>AC</p>
          </label>
        </li>
        <li className={s.item}>
          <label
            className={`${s.label} ${
              checkedItems.has("transmission") ? s.checked : ""
            }`}>
            <input
              type="checkbox"
              name="equipment"
              value="transmission"
              onChange={handleCheckboxChange}
              checked={checkedItems.has("transmission")}
              className={s.input}
            />
            <img className={s.img} src={transmission} alt="automatic" />
            <p className={s.ac}>Transmission</p>
          </label>
        </li>
        <li className={s.item}>
          <label
            className={`${s.label} ${
              checkedItems.has("kitchen") ? s.checked : ""
            }`}>
            <input
              type="checkbox"
              name="equipment"
              value="kitchen"
              onChange={handleCheckboxChange}
              checked={checkedItems.has("kitchen")}
              className={s.input}
            />
            <img className={s.img} src={kitchen} alt="kitchen" />
            <p className={s.ac}>Kitchen</p>
          </label>
        </li>
        <li className={s.item}>
          <label
            className={`${s.label} ${checkedItems.has("TV") ? s.checked : ""}`}>
            <input
              type="checkbox"
              name="equipment"
              value="TV"
              onChange={handleCheckboxChange}
              checked={checkedItems.has("TV")}
              className={s.input}
            />
            <img className={s.img} src={tv} alt="TV" />
            <p className={s.ac}>TV</p>
          </label>
        </li>
        <li className={s.item}>
          <label
            className={`${s.label} ${
              checkedItems.has("bathroom") ? s.checked : ""
            }`}>
            <input
              type="checkbox"
              name="equipment"
              value="bathroom"
              onChange={handleCheckboxChange}
              checked={checkedItems.has("bathroom")}
              className={s.input}
            />
            <img className={s.img} src={bathroom} alt="Bathroom" />
            <p className={s.ac}>Bathroom</p>
          </label>
        </li>
      </ul>
    </div>
  );
}
