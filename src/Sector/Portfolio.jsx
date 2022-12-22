import React from "react";
import Heading from "../Component/Heading";
import PortfolioCart from "../Component/PortfolioCart";
import { AiOutlineHeart } from "react-icons/ai";
import { portfolio } from "../Data/Portfolio";

function Portfolio({ mode }) {
  return (
    <>
      <hr
        id="portfolio"
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "50px 5%",
        }}
      />
      <div className="flex flex-col items-center w-full p-10 gap-10 duration-500">
        <Heading
          name="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          heading="My Portfolio"
          align="center"
          mode={mode}
        />
        <div className="flex flex-wrap justify-center gap-10">
          {portfolio.map((item) => (
            <PortfolioCart
              info={item}
              key={item.id}
              icon={<AiOutlineHeart />}
              sector="portfolio"
              mode={mode}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
