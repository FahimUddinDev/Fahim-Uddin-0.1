import React, { useState, useEffect } from "react";
import { education, education1 } from "../../Data/Portfolio";
import CartDivision from "./CartDivision";
function Education({ mode }) {
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }
  const [windowWidth, setWindowWidth] = useState("");
  useEffect(() => {
    setWindowWidth(getWindowDimensions());
  }, []);
  const info =
    windowWidth > 768
      ? education.slice(0, Math.ceil(education.length / 2))
      : education;
  const info2 =
    windowWidth > 768 ? education.slice(Math.ceil(education.length / 2)) : null;
  return (
    <div className="flex gap-10 flex-col md:flex-row w-full ">
      <CartDivision
        info={info}
        name="."
        heading="Education History"
        mode={mode}
      />

      {info2 && (
        <div className={windowWidth > 768 ? "mt-8 w-full" : "-mt-8 w-full"}>
          <CartDivision info={info2} name={""} heading={"."} mode={mode} />
        </div>
      )}
    </div>
  );
}

export default Education;
