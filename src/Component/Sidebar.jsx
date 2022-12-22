import React from "react";
import logo from "../Assets/Image/logo.png";
import { Link } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import { FiFacebook, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { SocialMedia } from "./Buttons";
function Sidebar({ sidebar, setSidebar, mode }) {
  return (
    <div
      className={`fixed top-0 overflow-y-scroll  ${
        sidebar ? "left-0" : "-left-[100%]"
      } w-full  h-full ${
        mode === "dark" ? "bg-black/50" : "bg-white/50"
      } z-50 ease-in-out duration-500 `}
    >
      <div
        className="pb-10 p-6 max-w-lg h-fit "
        style={{
          background:
            mode === "dark"
              ? "var(--background-color-2)"
              : "var(--background-light)",
        }}
      >
        <div className="flex items-center justify-between">
          <div
            className="flex justify-center items-center overflow-hidden w-28 h-28 rounded-full cursor-pointer"
            style={{
              border: `3px solid ${
                mode === "dark" ? "#262a2e" : "var(--color-lightn)"
              }`,
            }}
          >
            <img src={logo} alt="img" className="mt-2 w-full h-full" />
          </div>
          <div
            className="flex justify-center items-center rounded-full w-18 h-18 p-2 cursor-pointer"
            style={{
              boxShadow:
                mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
            }}
            onClick={() => setSidebar(!sidebar)}
          >
            <RxCross2
              style={{
                fontSize: "28px",
                color:
                  mode === "dark"
                    ? "var(--color-primary)"
                    : "var(--color-white-wv)",
              }}
            />
          </div>
        </div>
        <div
          className="text-2xl"
          style={{
            color:
              mode === "dark" ? "var(--color-body)" : "var(--color-white-wv)",
          }}
        >
          <p>Fahim Uddin</p>
          <p>Front-end devoloper</p>
          <hr
            style={{
              borderBlockColor:
                mode === "dark"
                  ? "var(--color-body-white)"
                  : "var(--color-lightn)",
              marginTop: "20px",
            }}
          />
        </div>
        <div
          className="flex flex-col gap-6 mt-4 text-2xl font-semibold w-full "
          style={{ color: "var(--color-body)" }}
        >
          <Link
            className={`${
              mode === "dark" ? "hover:text-slate-100" : "hover:text-slate-700"
            }  cursor-pointer w-full`}
            onClick={() => setSidebar(!sidebar)}
            to="home"
            spy
            smooth
            duration={500}
            activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
          >
            HOME
          </Link>

          <Link
            to="features"
            spy
            smooth
            duration={500}
            activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
            className={`${
              mode === "dark" ? "hover:text-slate-100" : "hover:text-slate-700"
            }  cursor-pointer w-full`}
            onClick={() => setSidebar(!sidebar)}
          >
            FEATURES
          </Link>

          <Link
            to="portfolio"
            spy
            smooth
            duration={500}
            activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
            className={`${
              mode === "dark" ? "hover:text-slate-100" : "hover:text-slate-700"
            }  cursor-pointer w-full`}
            onClick={() => setSidebar(!sidebar)}
          >
            PORTFOLIO
          </Link>

          <Link
            to="resume"
            spy
            smooth
            duration={500}
            activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
            className={`${
              mode === "dark" ? "hover:text-slate-100" : "hover:text-slate-700"
            }  cursor-pointer w-full`}
            onClick={() => setSidebar(!sidebar)}
          >
            RESUME
          </Link>

          <Link
            to="clients"
            spy
            smooth
            duration={500}
            activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
            className={`${
              mode === "dark" ? "hover:text-slate-100" : "hover:text-slate-700"
            }  cursor-pointer w-full`}
            onClick={() => setSidebar(!sidebar)}
          >
            CLIENTS
          </Link>

          <Link
            to="pricing"
            spy
            smooth
            duration={500}
            activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
            className={`${
              mode === "dark" ? "hover:text-slate-100" : "hover:text-slate-700"
            }  cursor-pointer w-full`}
            onClick={() => setSidebar(!sidebar)}
          >
            PRICING
          </Link>

          <Link
            className={`${
              mode === "dark" ? "hover:text-slate-100" : "hover:text-slate-700"
            }  cursor-pointer w-full`}
            to="blog"
            spy
            smooth
            duration={500}
            activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
            onClick={() => setSidebar(!sidebar)}
          >
            BLOG
          </Link>

          <Link
            to="contact"
            spy
            smooth
            duration={500}
            activeClass={`${mode === "dark" ? "nav-active" : "nav-active-w"}`}
            className={`${
              mode === "dark" ? "hover:text-slate-100" : "hover:text-slate-700"
            }  cursor-pointer w-full`}
            onClick={() => setSidebar(!sidebar)}
          >
            CONTACT
          </Link>

          <hr
            style={{
              borderBlockColor:
                mode === "dark"
                  ? "var(--color-body-white)"
                  : "var(--color-lightn)",
              marginTop: "20px",
            }}
          />
        </div>
        <div className="flex flex-col">
          <div
            style={{
              color:
                mode === "dark"
                  ? "var(--color-lightn)"
                  : "var(--color-body-white)",
            }}
            className="text-3xl font-bold mt-6"
          >
            <p>FIND ME IN</p>
          </div>

          <div className="flex justify-around mt-6 transition duration-1000 ">
            <SocialMedia icon={<FiFacebook />} mode={mode} />
            <SocialMedia icon={<FiInstagram />} mode={mode} />
            <SocialMedia icon={<FiLinkedin />} mode={mode} />
            <SocialMedia icon={<FiGithub />} mode={mode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
