import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Image/logo.png";
import { AiOutlineCopyright } from "react-icons/ai";
function Footer({ mode }) {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <Link to="/">
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex justify-center items-center overflow-hidden w-24 h-24 rounded-full"
            style={{
              border:
                mode === "dark"
                  ? "3px solid #262a2e"
                  : "3px solid var(--color-lightn)",
            }}
          >
            <img src={logo} alt="img" className="mt-2 w-full h-full" />
          </div>
          <div className="text-3xl font-bold">
            <h1
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-lightn)"
                    : "var(--color-body-white)",
              }}
            >
              Fahim Uddin
            </h1>
          </div>
        </div>
      </Link>
      <div>
        <div
          className="flex justify-center items-center text-xl gap-2"
          style={{ color: "var(--color-body)" }}
        >
          <AiOutlineCopyright /> 2022. All rights reserved by
          <div className="flex relative footer-name duration-500">
            <span className="cursor-pointer  duration-500">Fahim Uddin</span>
            <div className="under-line absolute duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
