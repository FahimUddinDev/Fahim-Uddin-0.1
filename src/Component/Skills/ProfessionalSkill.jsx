import React, { useState, useEffect } from "react";
import ProfessionalSkillDiv from "./ProfessionalSkillDiv";
import { skill } from "../../Data/Portfolio";
function ProfessionalSkill({ mode }) {
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }
  const [windowWidth, setWindowWidth] = useState("");
  useEffect(() => {
    setWindowWidth(getWindowDimensions());
  }, []);
  const info =
    windowWidth > 768 ? skill.slice(0, Math.ceil(skill.length / 2)) : skill;
  const info2 =
    windowWidth > 768 ? skill.slice(Math.ceil(skill.length / 2)) : null;
  return (
    <div className="w-full gap-20 px-10 flex flex-col md:flex-row">
      <ProfessionalSkillDiv
        skill={info}
        name="Features"
        heading="My Skills"
        mode={mode}
      />
      {info2 && (
        <ProfessionalSkillDiv
          skill={info2}
          name={""}
          heading={"."}
          mode={mode}
        />
      )}
    </div>
  );
}

export default ProfessionalSkill;
