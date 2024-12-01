import { useEffect, useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Loader } from "../../components/Loader/Loader";

import s from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [filter, isSetFilter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  }, []);

  const handleSearch = (newFilters) => {
    setIsLoading(true);
    isSetFilter(newFilters);
    setIsLoading(false);
  };

  return (
    <main className={s.container}>
      {isLoading && <Loader />}
      <div className={s.catalog}>
        <Sidebar onSearch={handleSearch} />
        {!isLoading && <CampersList filter={filter} />}
      </div>
    </main>
  );
}
