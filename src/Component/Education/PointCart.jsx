import React, { useState } from "react";
import { Buttons } from "../Buttons";

function PointCart({ name, time, point, description, mode }) {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div
      className={`flex justify-start relative duration-500 ease-linear w-full ${
        mode === "dark" ? "p-cart" : "p-cart-w"
      }`}
    >
      <div className=" flex relative">
        <div className="flex justify-center items-center h-2 relative top-20 ">
          <div
            className="circle duration-500 z-10"
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background:
                mode === "dark"
                  ? "var(--background-color-2)"
                  : "var(--color-secondary)",
              border: `3px solid ${
                mode === "dark" ? "var(--color-tertiary)" : "#d9dee2"
              }`,
            }}
          ></div>
          <div
            style={{
              width: "30px",
              height: "0",
              background: "var(--background-1)",
              border: `2px solid ${
                mode === "dark" ? "var(--color-tertiary)" : "#d9dee2"
              }`,
            }}
          ></div>
        </div>
      </div>
      <div
        className={`flex justify-center items-center flex-col w-full ${
          mode === "dark" ? "pointCart" : "pointCart-w"
        } p-10 rounded-2xl`}
        onMouseEnter={() => setLightMode(true)}
        onMouseLeave={() => setLightMode(false)}
      >
        <div className="flex justify-between items-center gap-10 w-full">
          <div className="flex flex-col gap-10 w-full duration-500 justify-start ">
            <p
              className=" text-4xl font-semibold point-cart-heading duration-500"
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-lightn)"
                    : "var(--color-heading-wv)",
              }}
            >
              {name}
            </p>
            <p
              className="text-2xl point-cart-body duration-500"
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-body)"
                    : "var(--color-body-white)",
              }}
            >
              {time}
            </p>
          </div>
          <div>
            {point !== "" && (
              <Buttons text={point} mode={mode} lightMode={lightMode} />
            )}
          </div>
        </div>
        <hr
          style={{
            borderBlockColor:
              mode === "dark" ? "var(--color-midgray)" : "var(--color-lightn)",
            margin: "10px ",
          }}
        />
        <div className="w-full">
          <div
            className="text-2xl point-cart-body duration-500 w-full  "
            style={{
              color:
                mode === "dark"
                  ? "var(--color-body)"
                  : "var(--color-body-white)",
            }}
          >
            {description?.map((item, index) => {
              const heading = () => {
                if (item[Object.keys(item)[0]]?.length > 1) {
                  return Object.keys(item)[0];
                }
              };
              return (
                <ul key={index + "de"} className="text-left">
                  {heading()}
                  {item[Object.keys(item)[0]]?.map((point, i) => {
                    return (
                      <li className="text-left" key={i + "desc"}>
                        {point}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointCart;
