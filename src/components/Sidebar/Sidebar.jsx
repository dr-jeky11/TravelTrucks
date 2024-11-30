import Location from "../Location/Location.jsx";
import Equipment from "../Equipment/Equipment.jsx";
import Type from "../Type/Type.jsx";

import s from "../Sidebar/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={s.sidebar}>
      <p className={s.text}>Location</p>
      <Location />
      <p className={s.filters}>Filters</p>
      <Equipment />
      <Type />
    </div>
  );
}
