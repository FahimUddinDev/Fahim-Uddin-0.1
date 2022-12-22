import React, { useState } from "react";
import Heading from "../Component/Heading";
import { price } from "../Data/Portfolio";
import {
  AiOutlineCheck,
  AiOutlineArrowRight,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
function Pricing({ mode }) {
  const [active, setActive] = useState("standard");
  const [activePrice, setActivePrice] = useState(price[1]);
  return (
    <>
      <hr
        id="pricing"
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "50px 5%",
        }}
      />
      <div className="flex md:m-28 m-10 flex-col md:flex-row relative h-full">
        <div className="w-full md:min-w-[50%] flex justify-center md:min-h-full  relative">
          <div className=" flex  justify-center md:sticky md:top-1/2 h-fit">
            <Heading
              name="pricing"
              heading="My Pricing "
              mode={mode}
              align="center"
            />
          </div>
        </div>
        <div
          className="flex flex-col gap-10  rounded-2xl"
          style={{
            background:
              mode === "dark"
                ? "var(--background-color-1)"
                : "var(--gradient-box-w)",
            boxShadow:
              mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
          }}
        >
          <div
            className="flex w-full rounded-3xl"
            style={{
              background:
                mode === "dark"
                  ? "var(--background-color-1)"
                  : "var(--gradient-box-w)",
            }}
          >
            <div
              className={`flex justify-center cursor-pointer items-center text-4xl w-1/3 heart duration-500 p-10 rounded-lg ${
                active === "static" &&
                (mode === "dark" ? "subNavActive" : "subNavActive-w")
              }`}
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-secondary)"
                    : "var(--color-body-white)",
              }}
              onClick={() => {
                setActive("static");
                setActivePrice(price[0]);
              }}
            >
              <p className="font-normal">Static</p>
            </div>
            <div
              className={`flex justify-center cursor-pointer items-center text-4xl w-1/3 heart duration-500 p-10 rounded-lg ${
                active === "standard" &&
                (mode === "dark" ? "subNavActive" : "subNavActive-w")
              }`}
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-secondary)"
                    : "var(--color-body-white)",
              }}
              onClick={() => {
                setActive("standard");
                setActivePrice(price[1]);
              }}
            >
              <p className="font-normal">Standard</p>
            </div>
            <div
              className={`flex justify-center cursor-pointer items-center text-4xl w-1/3 heart duration-500 p-10 rounded-lg ${
                active === "premium" &&
                (mode === "dark" ? "subNavActive" : "subNavActive-w")
              }`}
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-secondary)"
                    : "var(--color-body-white)",
              }}
              onClick={() => {
                setActive("premium");
                setActivePrice(price[2]);
              }}
            >
              <p className="font-normal">Premium</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 m-10 ">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <p
                  className="flex text-4xl font-semibold duration-500"
                  style={{
                    color:
                      mode === "dark"
                        ? "var(--color-lightn)"
                        : "var(--color-heading-wv)",
                  }}
                >
                  {activePrice.title}
                </p>
                <p
                  className="text-2xl duration-500"
                  style={{
                    color:
                      mode === "dark"
                        ? "var(--color-body)"
                        : "var(--color-body-white)",
                  }}
                >
                  {activePrice.name}
                </p>
              </div>
              <div>
                <p
                  className=" duration-500 text-5xl font-bold rounded-lg px-10 py-5"
                  style={{
                    color: "var(--color-primary)",
                    background:
                      mode === "dark"
                        ? "var(--background-color-1)"
                        : "var(--gradient-box-w)",
                    boxShadow:
                      mode === "dark"
                        ? "var(--shadow-1)"
                        : "var(--shadow-white-3)",
                  }}
                >
                  ${activePrice.price}.00
                </p>
              </div>
            </div>
            <div>
              <p
                className="text-2xl"
                style={{
                  color:
                    mode === "dark"
                      ? "var(--color-body)"
                      : "var(--color-body-white)",
                }}
              >
                {activePrice.desc}
              </p>
            </div>
            <div className="flex flex-wrap ">
              {activePrice.offer?.map((item, index) => {
                return (
                  <p
                    className="w-1/2 flex gap-2 text-2xl mt-4"
                    style={{
                      color:
                        mode === "dark"
                          ? "var(--color-lightn)"
                          : "var(--color-body-white)",
                    }}
                    key={index + "pe"}
                  >
                    <AiOutlineCheck />
                    {item}
                  </p>
                );
              })}
            </div>
            <div
              className={`flex w-full justify-center items-center  ${
                mode === "dark" ? "order" : "order-w"
              } rounded-lg text-3xl duration-500 cursor-pointer`}
            >
              <div
                className={`w-full h-full flex justify-center items-center duration-500 p-10 ${
                  mode === "dark" ? "order-btn" : "order-btn-w"
                }`}
              >
                <p className="flex justify-center items-center gap-4 duration-500">
                  ORDER NOW {<AiOutlineArrowRight />}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p
                className="flex justify-center items-center text-xl gap-4 p-10"
                style={{
                  color:
                    mode === "dark"
                      ? "var(--color-body)"
                      : "var(--color-body-white)",
                }}
              >
                {<AiOutlineClockCircle />}2Days Delivery{" "}
                {<TbActivityHeartbeat />} Unlimited Revision
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
