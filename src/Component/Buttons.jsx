import React from "react";

export const SocialMedia = ({ icon, mode }) => {
  return (
    <div
      className={`${
        mode === "dark" ? "socialButton" : "socialButton-w"
      } p-6 flex justify-center items-center rounded-md  min-w-min ${
        mode === "dark"
          ? "text-slate-300 hover:text-slate-100"
          : "text-slate-500 hover:text-slate-700"
      } text-4xl font-black cursor-pointer`}
    >
      {icon}
    </div>
  );
};
export const Buttons = ({ text, mode, lightMode }) => {
  return (
    <div
      className={`${mode === "dark" ? "buttons" : "buttons-w"} ${
        mode !== "dark" && lightMode && "button-w-a"
      } py-3 px-6 flex justify-center items-center rounded-md  min-w-min text-slate-300 hover:text-slate-100 text-2xl font-semibold cursor-pointer`}
    >
      {text}
    </div>
  );
};
