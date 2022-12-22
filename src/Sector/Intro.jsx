import React from "react";
import { SocialMedia } from "../Component/Buttons";
import "@fontsource/montserrat";
import { FiFacebook, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import icon1 from "../Assets/icons/icons-01.png";
import icon2 from "../Assets/icons/icons-02.png";
import icon3 from "../Assets/icons/icons-03.png";
import image from "../Assets/Image/my-1.png";

function Intro({ mode }) {
  return (
    <>
      <hr
        id="home"
        style={{
          borderBlockColor: "transparent",
        }}
      />
      <div className="m-10 md:m-28 flex flex-col-reverse md:flex-row md:mx-28 p-4 justify-center  items-center ">
        {/* writing site  */}
        <div
          style={{
            color:
              mode === "dark"
                ? "var(--color-lightn)"
                : "var(--color-body-white)",
          }}
          className="w-full h-full md:w-1/2 flex gap-4 flex-col md:gap-40  items-center ml-10 mr-10 mb-0 "
        >
          <div className="w-full h-full  flex flex-col gap-10 justify-between">
            <p className="text-2xl">WELCOME TO MY WORLD</p>
            <p
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-secondary)"
                    : "var(--color-body-white)",
                fontFamily: "Montserrat",
              }}
              className=" text-5xl md:text-7xl font-[1000] text-white"
            >
              Hi, I'm{" "}
              <span
                style={{
                  color: "var(--color-primary)",
                }}
                className="whitespace-nowrap leading-loose"
              >
                Fahim Uddin
              </span>{" "}
              <br />{" "}
              <div className="mainHead">
                a
                <div className="message">
                  <div>Developer.</div>
                  <div className="mt-5">Developer.</div>
                  <div className="mt-5">Developer.</div>
                </div>
              </div>
            </p>

            <p className="text-2xl ">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="flex flex-col gap-4 mt-10">
              <p className="text-2xl"> FIND ME IN</p>
              <div className="flex gap-6">
                <SocialMedia icon={<FiFacebook />} mode={mode} />
                <SocialMedia icon={<FiInstagram />} mode={mode} />
                <SocialMedia icon={<FiLinkedin />} mode={mode} />
                <SocialMedia icon={<FiGithub />} mode={mode} />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <p className="text-2xl"> BEST SKILL ON</p>
              <div className="flex gap-6">
                <SocialMedia
                  icon={
                    <img
                      style={{ width: "22px", height: "22px" }}
                      src={icon1}
                      alt="icon"
                    />
                  }
                  mode={mode}
                />
                <SocialMedia
                  icon={
                    <img
                      style={{ width: "22px", height: "22px" }}
                      src={icon2}
                      alt="icon"
                    />
                  }
                  mode={mode}
                />
                <SocialMedia
                  icon={
                    <img
                      style={{ width: "22px", height: "22px" }}
                      src={icon3}
                      alt="icon"
                    />
                  }
                  mode={mode}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Image site  */}
        <div className="w-full relative md:w-1/2 flex justify-center items-center mx-10 mb-10">
          <div
            className="w-5/6 h-5/6 absolute bottom-0 rounded-xl flex justify-center items-center "
            style={{
              background:
                mode === "dark"
                  ? "var(--background-color-1)"
                  : "var(--gradient-box-w)",

              boxShadow:
                mode === "dark" ? "var(--shadow-1)" : "var(--shadow-white-3)",
            }}
          ></div>
          <div
            className="w-full h-full flex justify-center "
            style={{ zIndex: 1 }}
          >
            <img className="h-full" src={image} alt="Bio" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
