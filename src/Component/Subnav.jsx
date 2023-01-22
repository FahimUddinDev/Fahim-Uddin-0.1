import React, { useState } from "react";
import { Link } from "react-router-dom";

function Subnav({ navItem, flex, position, mode }) {
  const [active, setActive] = useState("/");

  return (
    <div
      className={`duration-400 flex flex-col md:${
        flex ? "flex-col" : "flex-row"
      } ${position ? position : "relative"}  ${
        position === "sticky" && "top-48"
      } justify-center items-center text-3xl h-fit gap-5 w-full rounded-2xl`}
      style={{
        boxShadow:
          mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
        color: mode === "dark" ? "var(--color-lightn)" : "var(--color-body)",
        background:
          mode === "dark"
            ? "var(--background-color-1)"
            : "var(--gradient-box-w)",
      }}
    >
      {navItem?.map((item, i) => {
        return (
          <Link
            className={`p-8 w-full rounded-2xl ${
              mode === "dark" ? "subNavHover" : "subNavHover-w"
            } duration-500 flex justify-center items-center ${
              active === item.link &&
              (mode === "dark" ? "subNavActive" : "subNavActive-w")
            }`}
            to={item.link}
            onClick={() => setActive(item.link)}
            key={i + "sub"}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Subnav;
