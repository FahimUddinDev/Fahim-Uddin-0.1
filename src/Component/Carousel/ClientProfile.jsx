import React from "react";

function ClientProfile({ person, mode }) {
  return (
    <div className="w-full md:h-full m-10 ">
      <div
        className="flex h-full flex-col gap-10 p-8 rounded-xl"
        style={{
          boxShadow:
            mode === "dark" ? "var(--shadow-1)" : "var(--gradient-box-w)",
          background:
            mode === "dark"
              ? "var(----background-color-1)"
              : "var(--gradient-box-w)",
        }}
      >
        <div className="w-full rounded-xl overflow-hidden">
          <img
            className="w-full duration-500 slide-image"
            src={person.image}
            alt={person.name}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p
            className="uppercase text-xl"
            style={{ color: "var(--color-primary)" }}
          >
            {person.organization}
          </p>
          <p
            className="capitalize text-3xl font-bold"
            style={{
              color:
                mode === "dark"
                  ? "var(--color-lightn)"
                  : "var(--color-heading-wv)",
            }}
          >
            {person.name}
          </p>
          <p
            className="text-xl"
            style={{
              color:
                mode === "dark"
                  ? "var(--color-body)"
                  : "var(--color-body-white)",
            }}
          >
            {person.designation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
