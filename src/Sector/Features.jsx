import React from "react";
import DescriptionCart from "../Component/DescriptionCart";
import { VscMenu } from "react-icons/vsc";
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
          <DescriptionCart
            icon={<VscMenu />}
            heading="Business Stratagy"
            shortDesc="I throw myself down among the tall grass by the stream as I lie close to the earth."
            mode={mode}
          />
          <DescriptionCart
            icon={<VscMenu />}
            heading="Business Stratagy"
            shortDesc="I throw myself down among the tall grass by the stream as I lie close to the earth."
            mode={mode}
          />
          <DescriptionCart
            icon={<VscMenu />}
            heading="Business Stratagy"
            shortDesc="I throw myself down among the tall grass by the stream as I lie close to the earth."
            mode={mode}
          />
          <DescriptionCart
            icon={<VscMenu />}
            heading="Business Stratagy"
            shortDesc="I throw myself down among the tall grass by the stream as I lie close to the earth."
            mode={mode}
          />
          <DescriptionCart
            icon={<VscMenu />}
            heading="Business Stratagy"
            shortDesc="I throw myself down among the tall grass by the stream as I lie close to the earth."
            mode={mode}
          />
          <DescriptionCart
            icon={<VscMenu />}
            heading="Business Stratagy"
            shortDesc="I throw myself down among the tall grass by the stream as I lie close to the earth."
            mode={mode}
          />
        </div>
      </div>
    </>
  );
}

export default Features;
