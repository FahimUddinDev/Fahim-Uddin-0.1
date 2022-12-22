import React from "react";

import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

function PortfolioCart({ info, icon, sector, mode }) {
  return (
    <div
      className={`flex p-10 flex-col gap-10 rounded-xl ${
        mode === "dark" ? "portfolioCart" : "portfolioCart-w"
      } cursor-pointer duration-1000`}
    >
      <div className="w-full overflow-hidden duration-500 rounded-xl">
        <img
          className="portfolio-image duration-500 rounded-xl"
          src={info.image}
          alt="project"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="text-2xl" style={{ color: "var(--color-primary)" }}>
            {info.name}
          </div>
          <div
            className="text-2xl flex gap-2"
            style={{
              color:
                mode === "dark"
                  ? "var(--color-lightn)"
                  : "var(--color-body-white)",
            }}
          >
            <div className="text-2xl heart">{icon}</div>
            <div>{info.react}</div>
          </div>
        </div>
        <Link
          to={`${sector}/${info?.id}`}
          className="flex gap-2 relative overflow-hidden text-3xl  items-end   font-bold portfolio-heading duration-500"
          style={{
            color:
              mode === "dark"
                ? "var(--color-lightn)"
                : "var(--color-heading-wv)",
          }}
        >
          {info.heading}
          <div className="p-arrow flex items-end">
            <RxArrowTopRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioCart;
