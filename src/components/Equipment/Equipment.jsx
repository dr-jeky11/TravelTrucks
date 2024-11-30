import AC from "../../img/AC.svg";
import Transmission from "../../img/Transmission.svg";
import Kitchen from "../../img/Kitchen.svg";
import TV from "../../img/Tv.svg";
import Bathroom from "../../img/Bathroom.svg";

import s from "../Equipment/Equipment.module.css";

export default function Equipment() {
  return (
    <div className={s.wrap}>
      <h3 className={s.title}>Vehicle equipment</h3>
      <hr className={s.line} />
      <div className={s.radioGroup}>
        <label className={s.radioCard}>
          <input type="checkbox" name="feature" value="AC" />
          <div className={s.icon}>
            <img src={AC} />
          </div>
          AC
        </label>
        <label className={s.radioCard}>
          <input type="checkbox" name="feature" value="Automatic" />
          <div className={s.icon}>
            <img src={Transmission} />
          </div>
          Automatic
        </label>
        <label className={s.radioCard}>
          <input type="checkbox" name="feature" value="Kitchen" />
          <div className={s.icon}>
            <img src={Kitchen} />
          </div>
          Kitchen
        </label>
        <label className={s.radioCard}>
          <input type="checkbox" name="feature" value="TV" />
          <div className={s.icon}>
            <img src={TV} />
          </div>
          TV
        </label>
        <label className={s.radioCard}>
          <input type="checkbox" name="feature" value="Bathroom" />
          <div className={s.icon}>
            <img src={Bathroom} />
          </div>
          Bathroom
        </label>
      </div>
    </div>
  );
}
