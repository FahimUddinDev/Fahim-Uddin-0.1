import React from "react";
import { education, jobExperience } from "../../Data/Portfolio";
import CartDivision from "../Education/CartDivision";
function Interview() {
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      <CartDivision info={education} name="2007 - 2010" heading="Short Info" />
      <div className="mt-8">
        <CartDivision
          info={jobExperience}
          name="2007 - 2010"
          heading="Job Experience"
        />
      </div>
    </div>
  );
}

export default Interview;
