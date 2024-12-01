import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.container}>
      <TailSpin
        visible={true}
        height="50"
        width="50"
        color="#e44848"
        ariaLabel="tail-spin-loading"
        radius="2"
      />
    </div>
  );
};

export const LoaderBtn = () => {
  return (
    <div className={s.containerBtn}>
      <TailSpin
        visible={true}
        height="50"
        width="50"
        color="#e44848"
        ariaLabel="tail-spin-loading"
        radius="2"
      />
    </div>
  );
};
