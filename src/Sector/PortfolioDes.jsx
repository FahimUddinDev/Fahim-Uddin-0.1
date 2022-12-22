import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolio } from "../Data/Portfolio";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLike, AiOutlineRight } from "react-icons/ai";
function PortfolioDes({ mode }) {
  const navigate = useNavigate();
  let id = useParams();
  id = id["*"];
  let info = portfolio.find((item) => item.id == id);
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div
        className="relative flex flex-col gap-10 md:flex-row  h-full justify-center items-center m-10 md:m-28 overflow-hidden p-10 rounded-2xl"
        style={{
          boxShadow:
            mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-1)",
          background:
            mode === "dark"
              ? "var(--background-color-1)"
              : "var(--gradient-box-w)",
        }}
      >
        <button
          onClick={() => {
            navigate(-1);
          }}
          className=" hoverColorPrimary duration-300 absolute top-2 right-2 text-4xl flex justify-center items-center p-4 rounded-full"
          style={{
            background:
              mode === "dark"
                ? "var(--background-color-2)"
                : "var(--gradient-box-w)",
            boxShadow:
              mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
            color:
              mode === "dark"
                ? "var(--color-secondary)"
                : "var(--color-heading-wv)",
          }}
        >
          <RxCross2 />
        </button>

        <div className="w-full mt-10">
          <img src={info.image} alt="Description" className="rounded-2xl" />
        </div>
        <div
          className="flex flex-col text-3xl gap-10 mt-10 md:w-3/5"
          style={{
            color:
              mode === "dark" ? "var(--color-body)" : "var(--color-body-white)",
          }}
        >
          <p>Featured - {info.name}</p>

          {info?.blog?.map((item) => {
            return (
              <>
                <p
                  className="text-6xl font-bold"
                  style={{
                    color:
                      mode === "dark"
                        ? "var(--color-lightn)"
                        : "var(--color-heading-wv)",
                  }}
                >
                  {item?.heading}
                </p>
                <p>{item.text}</p>
              </>
            );
          })}

          <div
            className="flex justify-between text-2xl"
            style={{ color: "var(--color-primary)" }}
          >
            <button
              className={`flex gap-4 ${
                mode === "dark" ? "socialButton" : "socialButton-w"
              } justify-center items-center p-5 rounded-xl`}
            >
              Like This <AiOutlineLike />{" "}
            </button>
            <button
              className={`flex gap-4 ${
                mode === "dark" ? "socialButton" : "socialButton-w"
              } justify-center items-center p-5 rounded-xl`}
            >
              VIEW PROJECT <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDes;
