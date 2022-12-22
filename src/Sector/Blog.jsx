import React from "react";
import Heading from "../Component/Heading";
import PortfolioCart from "../Component/PortfolioCart";
import { blog } from "../Data/Portfolio";
import { CiClock2 } from "react-icons/ci";
function Blog({ mode }) {
  return (
    <>
      <hr
        id="blog"
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "50px 5%",
        }}
      />
      <div>
        <Heading
          name="VISIT MY BLOG AND KEEP YOUR FEEDBACK"
          heading="My Blog"
          align="center"
          mode={mode}
        />
        <div className="flex flex-wrap justify-center gap-10">
          {blog?.map((item, index) => {
            return (
              <PortfolioCart
                info={item}
                icon={<CiClock2 />}
                key={index + "blog"}
                sector="blog"
                mode={mode}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Blog;
