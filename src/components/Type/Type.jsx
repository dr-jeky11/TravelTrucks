import { useState } from "react";

import van from "../../img/Van.svg";
import fullyIntegrated from "../../img/FullyIntegrated.svg";
import alcove from "../../img/Alcove.svg";

import s from "./Type.module.css";

export default function TypeVehicle({ onChange, selectedValues }) {
  const [checkedItem, setCheckedItems] = useState(selectedValues || []);
  const typeOptions = [
    { value: "panelTruck", label: "Van", icon: van },
    {
      value: "fullyIntegrated",
      label: "Fully Integrated",
      icon: fullyIntegrated,
    },
    { value: "alcove", label: "Alcove", icon: alcove },
  ];

  const handleRadioChange = (e) => {
    const { value } = e.target;
    const newValue = checkedItem === value ? "" : value;

    setCheckedItems(newValue);
    onChange({ target: { value: newValue, checked: !!newValue } });
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Vehicle type</h2>
      <hr className={s.line} />
      <ul className={s.list}>
        {typeOptions.map((type) => (
          <li className={s.item} key={type.value}>
            <label
              className={`${s.label} ${
                checkedItem === type.value ? s.checked : ""
              }`}>
              <input
                type="radio"
                value={type.value}
                onChange={handleRadioChange}
                onClick={() =>
                  handleRadioChange({ target: { value: type.value } })
                }
                checked={checkedItem === type.value}
                className={s.input}
              />
              <img className={s.img} src={type.icon} alt="q" />
              <p className={s.ac}>{type.label}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
