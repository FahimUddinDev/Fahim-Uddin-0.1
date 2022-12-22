import React from "react";
import logo from "../Assets/Image/logo.png";
import { Link } from "react-scroll";
import { VscMenu } from "react-icons/vsc";
import Sidebar from "./Sidebar";

function Navbar({ setSidebar, mode }) {
  return (
    <div
      className=" top-0 w-full px-10 py-2 z-40 sticky backdrop-blur-sm duration-500 "
      style={{
        fontFamily: "var(--font-primary)",
        background:
          mode === "dark" ? "rgba(33, 36, 40, 0.8)" : "var(--background-light)",
        color: "var(--color-lightn)",
        boxShadow: mode === "dark" ? "" : "var(--shadow-white-3)",
      }}
    >
      <div className="flex justify-between h-full w-full items-center">
        <Link
          to="top"
          spy
          smooth
          duration={500}
          activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
        >
          <div className="flex cursor-pointer items-center gap-2">
            <div
              className="flex justify-center items-center overflow-hidden w-20 h-20 rounded-full"
              style={{
                border: `3px solid ${
                  mode === "dark" ? "#262a2e" : "var(--color-lightn)"
                }`,
              }}
            >
              <img src={logo} alt="img" className="mt-2 w-full h-full" />
            </div>
            <div
              className="text-3xl font-bold"
              style={{
                color: mode === "dark" ? "" : "var(--color-heading-wv)",
              }}
            >
              <h1>Fahim Uddin</h1>
            </div>
          </div>
        </Link>
        <div className="flex items-center   ">
          <div
            className="cursor-pointer flex md:hidden"
            onClick={() => setSidebar(true)}
          >
            <VscMenu
              style={{
                fontSize: "34px",
                color:
                  mode === "dark"
                    ? "var(--color-primary)"
                    : "var(--color-heading-wv)",
              }}
            />
          </div>
          <div
            className="md:flex items-center text-xl font-semibold gap-12 hidden "
            style={{ color: "var(--color-body)" }}
          >
            <Link
              to="home"
              spy
              smooth
              duration={500}
              activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
              className={`${
                mode === "dark"
                  ? "hover:text-slate-100"
                  : "hover:text-slate-700"
              }  cursor-pointer`}
            >
              HOME
            </Link>
            <Link
              to="features"
              spy
              smooth
              duration={500}
              activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
              className={`hover:text-slate-${
                mode === "dark" ? "100" : "700"
              } active:text-slate-100 cursor-pointer`}
            >
              FEATURES
            </Link>
            <Link
              to="portfolio"
              spy
              smooth
              duration={500}
              activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
              className={`hover:text-slate-${
                mode === "dark" ? "100" : "700"
              } active:text-slate-100 cursor-pointer`}
            >
              PORTFOLIO
            </Link>
            <Link
              to="resume"
              spy
              smooth
              duration={500}
              activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
              className={`hover:text-slate-${
                mode === "dark" ? "100" : "700"
              } active:text-slate-100 cursor-pointer`}
            >
              RESUME
            </Link>
            <Link
              to="clients"
              spy
              smooth
              duration={500}
              activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
              className={`hover:text-slate-${
                mode === "dark" ? "100" : "700"
              } active:text-slate-100 cursor-pointer`}
            >
              CLIENTS
            </Link>
            <Link
              to="pricing"
              spy
              smooth
              duration={500}
              activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
              className={`hover:text-slate-${
                mode === "dark" ? "100" : "700"
              } active:text-slate-100 cursor-pointer`}
            >
              PRICING
            </Link>
            <Link
              to="blog"
              spy
              smooth
              duration={500}
              activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
              className={`hover:text-slate-${
                mode === "dark" ? "100" : "700"
              } active:text-slate-100 cursor-pointer`}
            >
              BLOG
            </Link>
            <Link
              to="contact"
              spy
              smooth
              duration={500}
              activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
              className={`hover:text-slate-${
                mode === "dark" ? "100" : "700"
              } active:text-slate-100 cursor-pointer`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Navbar;
