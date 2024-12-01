import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.notFoundContainer}>
      <h1>PAGE NOT FOUND</h1>
      <p className={s.zoomArea}>
        <b>Oops!</b> Sorry, we can't find that page!
      </p>
      <section className={s.errorContainer}>
        <span>4</span>
        <span>
          <span className={s.screenReaderText}>0</span>
        </span>
        <span>4</span>
      </section>
      <div className={s.linkContainer}>
        <Link to="/" className={s.moreLink}>
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
