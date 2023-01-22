import React, { useState, useEffect } from "react";
import { training } from "../../Data/Portfolio";
import CartDivision from "../Education/CartDivision";
function Training({ mode }) {
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
      ? training.slice(0, Math.ceil(training.length / 2))
      : training;
  const info2 =
    windowWidth > 768 ? training.slice(Math.ceil(training.length / 2)) : null;
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      <CartDivision
        mode={mode}
        info={info}
        name="2013 - 2023"
        heading="Short Info Of My Training"
      />
      {info2 && (
        <div className="mt-8 w-full">
          <CartDivision info={info2} name="" heading="." mode={mode} />
        </div>
      )}
    </div>
  );
}

export default Training;
