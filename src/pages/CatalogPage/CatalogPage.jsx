import { useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import Sidebar from "../../components/Sidebar/Sidebar";

import s from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [filter, isSetFilter] = useState(null);

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
