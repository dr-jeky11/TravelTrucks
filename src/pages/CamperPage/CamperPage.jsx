import { NavLink, Outlet, useParams } from "react-router-dom";
import CamperCard from "../../components/CamperCard/CamperCard";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/selectors";
import { useEffect } from "react";
import { idCamper } from "../../redux/operations";
import s from "./CamperPage.module.css";

export default function CamperPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);

  useEffect(() => {
    dispatch(idCamper(id));
  }, [id, dispatch]);

  return (
    <div className={s.container}>
      <CamperCard camper={camper} />
      <ul className={s.list}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.item} ${s.active}` : s.item
            }
            to="features"
            end>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.item} ${s.active}` : s.item
            }
            to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr className={s.line} />
      <Outlet />
    </div>
  );
}
