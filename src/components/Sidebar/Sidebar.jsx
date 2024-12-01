import { useState } from "react";
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

  const handleLocationChange = (e) => isSetLocation(e.target.value.trim());

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    isSetVehicle((prevVehicle) =>
      checked
        ? [...prevVehicle, value]
        : prevVehicle.filter((item) => item !== value)
    );
  };

  const handleTypeChange = (e) => isSetType(e.target.value);

  const handleSearch = () => {
    const savedFilters = {
      location: isLocation,
      form: isType ? [isType] : [],
      ...isVehicle.reduce((acc, item) => {
        if (item !== "transmission") {
          acc[item] = true;
        } else {
          acc.transmission = "automatic";
        }
        return acc;
      }, {}),
    };
    onSearch(savedFilters);
  };

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
          <Equipment onChange={handleFilterChange} selectedValues={isVehicle} />
        </li>
        <li>
          <Type onChange={handleTypeChange} selectedValues={isType} />
        </li>
      </ul>
      <button className={s.button} type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
