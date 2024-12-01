import { useEffect, useState } from "react";
import Location from "../Location/Location";
import Type from "../Type/Type";
import Equipment from "../Equipment/Equipment";

import s from "./Sidebar.module.css";

export default function Sidebar({ onSearch }) {
  const [filters, setFilters] = useState({
    location: localStorage.getItem("location") || "",
    vehicle: JSON.parse(localStorage.getItem("vehicle") || "[]"),
    type: localStorage.getItem("type") || "",
  });

  useEffect(() => {
    onSearch(filters);
  }, []);

  useEffect(() => {
    localStorage.setItem("location", filters.location);
    localStorage.setItem("vehicle", JSON.stringify(filters.vehicle));
    localStorage.setItem("type", filters.type);

    const hasFilters =
      filters.location || filters.vehicle.length > 0 || filters.type.length > 0;

    if (hasFilters) {
      const searchFilters = {
        location: filters.location,
        form: filters.type,
        transmission: filters.vehicle.includes("transmission")
          ? "automatic"
          : undefined,
        ...filters.vehicle.reduce((acc, item) => {
          if (item !== "transmission") {
            acc[item] = true;
          }
          return acc;
        }, {}),
      };
      onSearch(searchFilters);
    } else {
      onSearch({});
    }
  }, [filters]);

  const handleLocationChange = (e) =>
    setFilters({ ...filters, location: e.target.value.trim() });

  const handleVehicleChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      vehicle: checked
        ? [...prevFilters.vehicle, value]
        : prevFilters.vehicle.filter((item) => item !== value),
    }));
  };

  const handleTypeChange = (e) =>
    setFilters({ ...filters, type: e.target.value });

  return (
    <div>
      <ul>
        <li>
          <Location
            onChange={handleLocationChange}
            selectedValues={filters.location}
          />
        </li>
        <li>
          <p className={s.sidebar}>Filters</p>
        </li>
        <li>
          <Equipment
            onChange={handleVehicleChange}
            selectedValues={filters.vehicle}
          />
        </li>
        <li>
          <Type onChange={handleTypeChange} selectedValues={filters.type} />
        </li>
      </ul>
      <button
        className={s.button}
        type="button"
        onClick={() => onSearch(filters)}>
        Search
      </button>
    </div>
  );
}
