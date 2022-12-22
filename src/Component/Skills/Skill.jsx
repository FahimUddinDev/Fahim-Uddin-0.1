import React, { useState, useEffect } from "react";

function Skill({ name, value, mode }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (value > counter) {
      var interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 20);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start">
      <div className="w-full">
        <p
          className="uppercase text-xl"
          style={{
            color:
              mode === "dark" ? "var(--color-body)" : "var(--color-body-white)",
          }}
        >
          {name}
        </p>
      </div>
      <div className="w-full rounded-xl">
        <div
          className="w-full h-5 rounded-3xl "
          style={{
            background: mode === "dark" ? "" : "var(--color-lightn)",
            boxShadow: mode === "dark" ? "var(--shadow-2)" : "none",
            border: mode !== "dark" && "3px solid var(--color-lightn)",
          }}
        >
          <div
            className="h-full rounded-xl relative  duration-75"
            style={{
              width: `${counter}%`,
              background:
                mode === "dark"
                  ? "var(--gradient-red-hover)"
                  : "linear-gradient(145deg, #fff 0%, var(--color-primary) 100%)",
            }}
          >
            <div
              className="absolute -right-10 -top-8 text-2xl"
              style={{
                color:
                  mode === "dark"
                    ? "var(--color-body)"
                    : "var(--color-body-white)",
              }}
            >
              {counter}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
