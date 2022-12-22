import React from "react";

function Heading({ name, heading, align, size, mode }) {
  return (
    <div className={`flex items-${align} flex-col gap-6 mb-10`}>
      <p
        className="flex text-2xl uppercase"
        style={{
          color:
            mode === "dark" ? "var(--color-primary)" : "var(--color-subtitle)",
        }}
      >
        {name && name}
      </p>
      <p
        className={`flex ${
          size ? "text-" + size + "xl" : "text-8xl"
        }  font-bold`}
        style={{
          color:
            mode === "dark" ? "var(--color-lightn)" : "var(--color-body-white)",
        }}
      >
        {heading}
      </p>
    </div>
  );
}

export default Heading;
