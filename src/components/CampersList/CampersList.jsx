import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";

import CamperCard from "../CamperCard/CamperCard";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations";

import s from "../CampersList/CampersList.module.css";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={s.listWrap}>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
}
