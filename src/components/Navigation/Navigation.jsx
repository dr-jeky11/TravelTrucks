import { NavLink } from "react-router-dom";

import s from "../Navigation/Navigation.module.css";
import logo from "../../img/logo.png";

export default function Navigation() {
  return (
    <>
      <header className={s.header}>
        <section className={s.logo}>
          <NavLink to="/">
            <img src={logo} alt="TravelTruck Logo" />
          </NavLink>
        </section>
        <nav className={s.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.home)}>
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? s.active : s.home)}>
            Catalog
          </NavLink>
        </nav>
      </header>
    </>
  );
}
