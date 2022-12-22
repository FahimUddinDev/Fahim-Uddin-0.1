import React from "react";
import { education, jobExperience } from "../../Data/Portfolio";
import CartDivision from "./CartDivision";
function Education({ mode }) {
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      <CartDivision
        info={education}
        name="2007 - 2010"
        heading="Education Quality"
        mode={mode}
      />
      <div className="mt-8">
        <CartDivision
          info={jobExperience}
          name="2007 - 2010"
          heading="Job Experience"
          mode={mode}
        />
      </div>
    </div>
  );
}

export default Education;
