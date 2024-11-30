import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));

import Loader from "../Loader/Loader";

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
