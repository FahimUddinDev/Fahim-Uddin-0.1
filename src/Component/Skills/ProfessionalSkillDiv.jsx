import React from "react";
import Skill from "./Skill";
import Heading from "../Heading";
function ProfessionalSkillDiv({ skill, name, heading, mode }) {
  return (
    <div className="w-full flex flex-col items-start">
      <Heading
        name={name}
        heading={heading}
        size={4}
        mode={mode}
        align="start"
      />
      <div className="flex flex-col w-full gap-10">
        {skill?.map((items, index) => {
          return (
            <Skill
              name={items.name}
              value={items.value}
              key={`${index}skill`}
              mode={mode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProfessionalSkillDiv;
