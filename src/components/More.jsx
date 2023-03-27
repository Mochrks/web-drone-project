import styles from "../style";
import { more } from "../assets";

const More = ({ styles }) => (
  <img
    src={more}
    alt="btn start"
    className={`sm:w-[170px] w-[130px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

export default More;
