import React, { useEffect, useState } from "react";
import { review } from "../../Data/Portfolio";
import Review from "./Review";
import ClientProfile from "./ClientProfile";
import quote from "../../Assets/icons/quote.png";
import { SocialMedia } from "../Buttons";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Heading from "../Heading";

const SingleSlide = ({ goLeft, goRight, info, mode }) => (
  <div className="flex justify-center min-w-full max-w-full">
    <div className=" w-full flex justify-center flex-col items-center md:flex-row ">
      <div className="w-full md:min-w-max md:py-20 flex items-center">
        <ClientProfile person={info} mode={mode} />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center hidden md:flex ">
          <img
            className={`w-48 ${mode !== "dark" && "opacity-30"}`}
            src={quote}
            alt="none"
          />

          <div className="flex gap-10">
            <button
              onClick={() => {
                goLeft();
              }}
            >
              <SocialMedia icon={<AiOutlineArrowLeft />} mode={mode} />
            </button>
            <button
              onClick={() => {
                goRight();
              }}
            >
              <SocialMedia icon={<AiOutlineArrowRight />} mode={mode} />
            </button>
          </div>
        </div>
        <Review review={info?.review} mode={mode} />
      </div>
    </div>
  </div>
);

function Slider({ mode }) {
  const [margin, setMargin] = useState(-100);
  const [transition, setTransition] = useState("duration-500");

  useEffect(() => {
    setTimeout(() => {
      if (margin === review.length * -100 - 100) {
        setTransition("");
        setMargin(-100);
      } else if (margin === 0) {
        setTransition("");
        setMargin(review.length * -100);
      }
    }, 500);
  }, [margin]);

  const goLeft = () => {
    console.log();
    if (margin > review.length * -100 - 100) {
      setTransition("duration-500");
      setMargin(margin - 100);
    } else {
      setTransition("");
      setMargin(0);
    }
  };
  const goRight = () => {
    if (margin < 0) {
      setTransition("duration-500");
      setMargin(margin + 100);
    } else {
      setTransition("");
      setMargin(review.length * -100 - 100);
    }
  };

  return (
    <>
      <hr
        id="testimonial"
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "50px 5%",
        }}
      />
      <div className="flex w-full flex-col justify-center  ">
        <Heading
          name="WHAT CLIENTS SAY"
          heading="Testimonial"
          align="center"
          mode={mode}
        />
        <div className=" flex flex-col md:flex-row w-full  justify-center items-center">
          <div className="overflow-hidden md:w-2/3 w-full items-center">
            <div
              className={`flex relative ${transition}`}
              style={{
                left: `${margin}%`,
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
            >
              <SingleSlide
                info={review[review.length - 1]}
                goLeft={goLeft}
                goRight={goRight}
                mode={mode}
              />

              {review?.map((info, i) => {
                return (
                  <SingleSlide
                    info={info}
                    key={info.name + info.id + i}
                    goLeft={goLeft}
                    goRight={goRight}
                    mode={mode}
                  />
                );
              })}
              <SingleSlide
                info={review[0]}
                goLeft={goLeft}
                goRight={goRight}
                mode={mode}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          {review?.map((item, index) => {
            return (
              <div
                className="w-6 h-6 rounded-full duration-500 "
                style={{
                  border: "2px solid var(--color-primary)",
                  background: `${
                    margin === (index + 1) * -100 ? "var(--color-primary)" : ""
                  }`,
                }}
                onClick={() => {
                  setMargin((index + 1) * -100);
                }}
                key={index + "00"}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slider;
