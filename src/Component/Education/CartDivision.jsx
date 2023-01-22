import React from "react";
import Heading from "../Heading";
import PointCart from "./PointCart";

function CartDivision({ info, name, heading, mode }) {
  return (
    <div className="w-full">
      {name !== "" && (
        <Heading name={name} heading={heading} size={6} mode={mode} />
      )}

      <div className={`flex relative w-full ${name === "" && "mt-40"}`}>
        <div
          className="absolute h-full z-0 "
          style={{
            width: "0px",
            border:
              mode === "dark"
                ? "2px solid var(--color-tertiary)"
                : "2px solid #d9dee2",
            left: "5px",
          }}
        ></div>
        <div className="flex  flex-col gap-10 min-w-full">
          {info?.map((item, index) => {
            return (
              <PointCart
                key={index + "edu"}
                name={item.name}
                time={item.time}
                point={item.point}
                description={item.description}
                mode={mode}
              />
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CartDivision;
