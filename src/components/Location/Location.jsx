import s from "./Location.module.css";
import location from "../../img/map-active.svg";

export default function Location({ onChange, selectedValues }) {
  return (
    <div className={s.container}>
      <p className={s.title}>Location</p>
      <label>
        <div className={s.locationContainer}>
          <img src={location} alt="Location Icon" className={s.locationIcon} />
          <input
            type="text"
            onChange={onChange}
            value={selectedValues}
            placeholder="City"
            className={s.locationInput}
          />
        </div>
      </label>
    </div>
  );
}
