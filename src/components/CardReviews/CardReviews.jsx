import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSelectedCamper } from "../../redux/selectors";
import { useEffect } from "react";
import { idCamper } from "../../redux/operations";
import starActive from "../../img/StarActive.svg";
import star from "../../img/Star.svg";
import Form from "../Form/Form";
import s from "./CardReviews.module.css";

export default function CardReviews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);

  useEffect(() => {
    dispatch(idCamper(id));
  }, [id, dispatch]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <img
          key={i}
          src={i < rating ? starActive : star}
          alt="star"
          style={{ display: "inline-block" }}
        />
      );
    }
    return stars;
  };

  return (
    <div className={s.position}>
      <div>
        {Array.isArray(camper.gallery) && camper.gallery.length > 0 && (
          <ul className={s.container}>
            {camper.reviews.map((review) => (
              <li className={s.item} key={review.reviewer_name}>
                <div className={s.nameStar}>
                  <p className={s.oneB}>
                    {review.reviewer_name.length > 1
                      ? review.reviewer_name.slice(0, 1) + " "
                      : review.reviewer_name}
                  </p>
                  <div>
                    <h3 className={s.name}>{review.reviewer_name}</h3>
                    <span aria-hidden="true">
                      {renderStars(review.reviewer_rating)}
                    </span>
                  </div>
                </div>
                <p className={s.comment}>{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}
