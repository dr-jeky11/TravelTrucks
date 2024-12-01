import { useEffect, useState } from "react";
import Location from "../Location/Location";
import Type from "../Type/Type";
import Equipment from "../Equipment/Equipment";

import s from "./Sidebar.module.css";

export default function Sidebar({ onSearch }) {
  const [isLocation, isSetLocation] = useState(
    localStorage.getItem("location") || ""
  );
  const [isVehicle, isSetVehicle] = useState(
    JSON.parse(localStorage.getItem("vehicle") || "[]")
  );
  const [isType, isSetType] = useState(localStorage.getItem("type") || "");

  useEffect(() => {
    const hasFilters = isLocation || isVehicle.length > 0 || isType.length > 0;
    if (hasFilters) {
      const savedFilters = {
        location: isLocation,
        form: isType ? [isType] : [],
        ...isVehicle.reduce((acc, item) => ({ ...acc, [item]: true }), {}),
      };
      onSearch(savedFilters);
    } else {
      onSearch({});
    }
  }, []);

  const handleLocationChange = (e) => isSetLocation(e.target.value.trim());
  const handleVehicleChange = (e) => {
    const { value, checked } = e.target;
    isSetVehicle((prevVehicle) =>
      checked
        ? [...prevVehicle, value]
        : prevVehicle.filter((item) => item !== value)
    );
  };
  const handleTypeChange = (e) => isSetType(e.target.value);

  return (
    <div>
      <ul>
        <li>
          <Location
            onChange={handleLocationChange}
            selectedValues={isLocation}
          />
        </li>
        <li>
          <p className={s.sidebar}>Filters</p>
        </li>
        <li>
          <Equipment
            onChange={handleVehicleChange}
            selectedValues={isVehicle}
          />
        </li>
        <li>
          <Type onChange={handleTypeChange} selectedValues={isType} />
        </li>
      </ul>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          const savedFilters = {
            location: isLocation,
            form: isType ? [isType] : [],
            ...isVehicle.reduce((acc, item) => ({ ...acc, [item]: true }), {}),
          };
          onSearch(savedFilters);
        }}>
        Search
      </button>{" "}
    </div>
  );
}
