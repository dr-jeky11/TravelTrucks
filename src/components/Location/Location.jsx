import s from "../Location/Location.module.css";

export default function Location() {
  return (
    <section className={s.section}>
      <input type="text" className={s.text} placeholder="City" />
    </section>
  );
}
