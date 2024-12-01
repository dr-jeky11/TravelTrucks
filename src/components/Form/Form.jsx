import { useParams } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

import s from "./Form.module.css";

export default function Form() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((data) => ({
      ...data,
      [name]: name === "comment" ? value : value.trim(),
    }));
  };

  const handleDateChange = (date) => {
    setForm((data) => ({
      ...data,
      bookingDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(`booking${id}`, JSON.stringify(form));

    iziToast.success({
      title: "Success",
      message: "Booking submitted successfully!",
      position: "topCenter",
      timeout: 4000,
    });

    setForm({
      name: "",
      email: "",
      bookingDate: "",
      comment: "",
    });
  };
  return (
    <div className={s.container}>
      <h2 className={s.title}>Book your Camper Van now</h2>
      <p className={s.content}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          required
        />
        <DatePicker
          selected={form.bookingDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          className={s.input}
          placeholderText="Booking date*"
          required
        />
        <textarea
          className={s.comment}
          name="comment"
          placeholder="Comment"
          value={form.comment}
          onChange={handleChange}></textarea>
        <button className={s.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
