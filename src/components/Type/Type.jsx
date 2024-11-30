import s from "../Type/Type.module.css";
import Van from "../../img/Van.svg";
import FullyIntegrated from "../../img/FullyIntegrated.svg";
import Alcove from "../../img/Alcove.svg";

export default function Type() {
  return (
    <div>
      <h3 className={s.title}>Vehicle type</h3>
      <hr className={s.line} />
      <div className={s.radioGroup}>
        <label className={s.radioCard}>
          <input type="radio" name="vehicleType" />
          <div className={s.icon}>
            <img src={Van} />
          </div>
          Van
        </label>
        <label className={s.radioCard}>
          <input type="radio" name="vehicleType" />
          <div className={s.icon}>
            <img src={FullyIntegrated} />
          </div>
          Fully Integrated
        </label>
        <label className={s.radioCard}>
          <input type="radio" name="vehicleType" />
          <div className={s.icon}>
            <img src={Alcove} />
          </div>
          Alcove
        </label>
      </div>
    </div>
  );
}
