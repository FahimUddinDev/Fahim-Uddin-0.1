import React from "react";
import { networking, coding } from "../../Data/Portfolio";
import CartDivision from "../Education/CartDivision";
function Experience() {
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      <CartDivision info={coding} name="2007 - 2010" heading="Coding History" />
      <div className="mt-8">
        <CartDivision
          info={networking}
          name="2007 - 2010"
          heading="Training History"
        />
      </div>
    </div>
  );
}

export default Experience;
