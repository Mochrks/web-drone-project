import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white border rounded-[10px] ${styles}`}
  >
    See Product
  </button>
);

export default Button;
