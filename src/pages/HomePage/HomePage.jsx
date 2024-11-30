import { NavLink } from "react-router-dom";
import s from "../HomePage/HomePage.module.css";

export default function HomePage() {
  return (
    <main className={s.main}>
      <div className={s.wrap}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.text}>
          You can find everything you want in our catalog
        </p>
        <NavLink to="/catalog" className={s.link}>
          View Now
        </NavLink>
      </div>
    </main>
  );
}
