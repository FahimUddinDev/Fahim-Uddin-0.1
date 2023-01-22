import React from "react";
import DescriptionCart from "../Component/DescriptionCart";
import { VscMenu } from "react-icons/vsc";
import { work } from "../Data/Portfolio";
import Heading from "../Component/Heading";

function Features({ mode }) {
  return (
    <>
      <hr
        id="features"
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "20px 5%",
        }}
      />
      <div className="p-10 md:p-32">
        <div
          className=" flex flex-col gap-10 "
          style={{ color: "var(--color-lightn)" }}
        >
          <Heading name="Features" heading="What I Do" mode={mode} />
        </div>
        <div className="flex flex-col flex-wrap md:flex-row justify-between items-center">
          {work.map((item, index) => {
            return (
              <DescriptionCart
                icon={<VscMenu />}
                heading={item.heading}
                shortDesc={item.shortDesc}
                mode={mode}
                key={index + "work"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Features;
