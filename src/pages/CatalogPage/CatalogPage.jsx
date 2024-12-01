import { useEffect, useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import Sidebar from "../../components/Sidebar/Sidebar";

import s from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [filter, isSetFilter] = useState({});

  useEffect(() => {
    const savedFilters = {
      location: localStorage.getItem("location") || "",
      vehicle: JSON.parse(localStorage.getItem("vehicle") || "[]"),
      type: localStorage.getItem("type") || "",
    };

    const searchFilters = {
      location: savedFilters.location,
      form: savedFilters.type,
      transmission: savedFilters.vehicle.includes("transmission")
        ? "automatic"
        : undefined,
      ...savedFilters.vehicle.reduce((acc, item) => {
        if (item !== "transmission") {
          acc[item] = true;
        }
        return acc;
      }, {}),
    };

    isSetFilter(searchFilters);
  }, []);

  const handleSearch = (newFilters) => {
    isSetFilter(newFilters);
  };

  return (
    <main className={s.container}>
      <div className={s.catalog}>
        <Sidebar onSearch={handleSearch} />
        <CampersList filter={filter} />
      </div>
    </main>
  );
}
