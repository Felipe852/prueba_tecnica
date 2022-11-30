import React from "react";

const Button = ({text}) => {
  return (
    <>
      <button className="bg-black text-white h-2/3 w-36 font-bold text-lg rounded-2xl">
        {text}
      </button>
    </>
  );
};

export default Button;
