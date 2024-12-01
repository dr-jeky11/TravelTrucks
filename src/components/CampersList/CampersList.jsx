import { useDispatch, useSelector } from "react-redux";
import { selectCamperItems } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../redux/operations";

import Camper from "../Camper/Camper";
import { LoaderBtn } from "../Loader/Loader";

import s from "./CampersList.module.css";

export default function CampersList({ filter }) {
  const dispatch = useDispatch();
  const campers = useSelector(selectCamperItems);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setVisibleCount(4);
    dispatch(fetchCamper({ ...filter, limit: 4 }));
  }, [dispatch, filter]);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const remainingCampers = campers.length - visibleCount;
      const loadMoreCount = remainingCampers >= 4 ? 4 : remainingCampers;
      setVisibleCount((prevCount) => prevCount + loadMoreCount);
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <ul>
        {campers.slice(0, visibleCount).map((camper) => (
          <li className={s.list} key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
      {loading ? (
        <LoaderBtn />
      ) : (
        campers.length > visibleCount && (
          <div className={s.buttonContainer}>
            <button onClick={handleLoadMore} className={s.button}>
              Load more
            </button>
          </div>
        )
      )}
    </div>
  );
}
