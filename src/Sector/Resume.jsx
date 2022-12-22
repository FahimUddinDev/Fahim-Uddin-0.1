import React, { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Education from "../Component/Education/Education";
import Experience from "../Component/Experience/Experience";
import Heading from "../Component/Heading";
import Interview from "../Component/Interview/Education";
import ProfessionalSkill from "../Component/Skills/ProfessionalSkill";
import Subnav from "../Component/Subnav";
import { resumeNav } from "../Data/Portfolio";
function Resume({ mode }) {
  return (
    <>
      <hr
        id="resume"
        style={{
          borderBlockColor:
            mode === "dark" ? "var(--color-tertiary)" : "var(--color-lightn)",
          margin: "50px 5%",
        }}
      />
      <div className=" flex flex-col gap-10 justify-center items-center m-10 md:mx-28 my-20">
        <div>
          <Heading
            name="7+ YEARS OF EXPERIENCE"
            heading="My Resume"
            align="center"
            mode={mode}
          />
        </div>
        <Subnav navItem={resumeNav} mode={mode} />
        <Routes>
          <Route path="*" element={<Education mode={mode} />} />
          <Route path="/skill" element={<ProfessionalSkill mode={mode} />} />
          <Route path="/training" element={<Experience mode={mode} />} />
          <Route path="/personalInfo" element={<Interview mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default Resume;
