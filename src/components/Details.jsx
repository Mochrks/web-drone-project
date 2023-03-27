import { details } from "../assets";

const Details = ({ styles }) => (
  <img
    src={details}
    alt="btn start"
    className={`sm:w-[170px] w-[130px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

export default Details;
