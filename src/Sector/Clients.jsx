import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Component/Heading";
import Subnav from "../Component/Subnav";
import { clientNav, clients } from "../Data/Portfolio";

const ClientCart = ({ client, mode }) => {
  return (
    <Link
      to={client?.link}
      className={`flex flex-col justify-between max-w-md min-w-sm h-80 justify-center items-center gap-10 p-10 duration-500 rounded-xl ${
        mode === "dark" ? "client-cart" : "client-cart-w"
      }`}
    >
      <img
        className="flex max-h-40"
        style={{ width: "150px" }}
        src={mode === "dark" ? client?.imageDark : client?.imageLight}
        alt="brand logo"
      />
      <div className="w-full flex flex-col items-center gap-4">
        <hr
          className="w-full"
          style={{
            borderBlockColor:
              mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          }}
        />
        <p className="text-3xl">{client.name}</p>
      </div>
    </Link>
  );
};

function Clients({ mode }) {
  return (
    <>
      <hr
        id="clients"
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "50px 5%",
        }}
      />
      <div className="m-10 mt-20 md:m-28 flex flex-col gap-10">
        <Heading name="Popular Clients" heading="Awesome Clients" mode={mode} />
        <div className="flex flex-col md:flex-row relative gap-10 ">
          <div className="w-full min-h-full relative top-0 left-0 ">
            <Subnav
              navItem={clientNav}
              position="sticky"
              flex="f-col"
              mode={mode}
            />
          </div>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {clients?.map((client, index) => {
              return (
                <ClientCart client={client} key={client + index} mode={mode} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
