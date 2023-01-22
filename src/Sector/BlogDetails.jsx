import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blog } from "../Data/Portfolio";
import { RxCross2 } from "react-icons/rx";

import CommentForm from "../Component/Form/Comment";
function BlogDetails({ mode }) {
  const navigate = useNavigate();
  let id = useParams();
  id = id["*"];
  let info = blog.find((item) => item.id.toString() === id);
  return (
    <div
      className="relative flex flex-col gap-10  justify-center items-center p-10 md:p-28 overflow-hidden p-10 pb-20 rounded-2xl"
      style={{
        boxShadow:
          mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
      }}
    >
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" hoverColorPrimary duration-500 absolute top-2 right-2 text-4xl flex justify-center items-center p-4 rounded-full"
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

      <div className="w-full mt-10 md:px-28">
        <img
          src={info.image}
          alt="Description"
          className="rounded-2xl w-full"
        />
      </div>
      <div
        className="flex flex-col text-3xl gap-14 mt-10 md:mx-28 "
        style={{
          color:
            mode === "dark" ? "var(--color-body)" : "var(--color-body-white)",
        }}
      >
        <p> {info.date}</p>

        {info?.blog?.map((item) => {
          return (
            <>
              <p
                className="text-6xl font-bold"
                style={{
                  color:
                    mode === "dark"
                      ? "var(--color-lightn)"
                      : "var(--color-body-white)",
                }}
              >
                {item?.heading}
              </p>
              <p>{item.text}</p>
            </>
          );
        })}

        <div className="" style={{ color: "var(--color-primary)" }}>
          <CommentForm mode={mode} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
