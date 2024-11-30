import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <TailSpin
      visible={true}
      height="50"
      width="50"
      color="#e44848"
      ariaLabel="tail-spin-loading"
      radius="2"
    />
  );
}
