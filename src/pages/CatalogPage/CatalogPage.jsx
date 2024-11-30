import CampersList from "../../components/CampersList/CampersList";
import Sidebar from "../../components/Sidebar/Sidebar";

import s from "../CatalogPage/CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <main className={s.main}>
      <Sidebar />
      <CampersList />
    </main>
  );
}
