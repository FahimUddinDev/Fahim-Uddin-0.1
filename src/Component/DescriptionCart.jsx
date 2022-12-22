import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
function DescriptionCart({ icon, heading, shortDesc, mode }) {
  return (
    <Link
      to={"/"}
      className={`${
        mode === "dark" ? "cart" : "cart-w"
      } flex justify-center items-start flex-col w-11/12  mt-10 p-6 gap-10  rounded-xl px-16 py-10`}
      style={{ color: "var(--color-lightn)" }}
    >
      <div className="relative cart-hover  flex flex-col gap-10">
        <div className="text-6xl des-c-icon">{icon}</div>
        <div className="gap-10 flex flex-col">
          <p className="text-5xl font-bold">{heading}</p>
          <p className="text-3xl">{shortDesc}</p>
        </div>
        <div className=" cart-arrow text-6xl des-c-icon">
          <AiOutlineArrowRight />
        </div>
      </div>
    </Link>
  );
}

export default DescriptionCart;
