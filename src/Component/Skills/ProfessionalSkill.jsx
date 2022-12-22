import React from "react";
import ProfessionalSkillDiv from "./ProfessionalSkillDiv";
import { computerSkill, developmentSkill } from "../../Data/Portfolio";
function ProfessionalSkill({ mode }) {
  return (
    <div className="w-full gap-20 px-10 flex flex-col md:flex-row">
      <ProfessionalSkillDiv
        skill={computerSkill}
        name="Features"
        heading="Design Skill"
        mode={mode}
      />
      <ProfessionalSkillDiv
        skill={developmentSkill}
        name="Features"
        heading="Development Skill"
        mode={mode}
      />
    </div>
  );
}

export default ProfessionalSkill;
