import React, { useContext, useState } from "react";
import { useFormContext } from "./FormContext";

const commonStyles = {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    marginBottom: "20px",
  };

  const formStyle = {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    minWidth: "fit-content",
    width: "500px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
    fontSize: "18px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
  };


const Form1 = ({ jobTitle, jobDescription, setJobTitle, setJobDescription, nextStep, prevStep}:{
    jobTitle: any,
   jobDescription: any,
    setJobTitle: any, 
    setJobDescription: any
    nextStep: any
    prevStep: any
}) => {
  const [formValues, setFormValues] = useFormContext()

  
  const skillsArray = ["JavaScript", "Python", "Java", "C++", "React"];

  const handleMultiSelect = (e: any) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      skills: formValues.skills.includes(value)
        ? formValues.skills.filter((skill: any) => skill !== value)
        : [...formValues.skills, value],
    });
  };

  const submittedForm1 = (e: any) => {
    e.preventDefault()

    nextStep()
  } 
  return (
    <div style={formStyle}>
      <h1>Fill Out Job Information</h1>

      <label
        style={{ display: "block", marginBottom: "10px", fontSize: "18px" }}
        htmlFor="mediumText"
      >
        Job Title:
      </label>
      <input
        style={commonStyles}
        type="text"
        id="mediumText"
        name="mediumText"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />

      <label
        style={{ display: "block", marginBottom: "10px", fontSize: "18px" }}
        htmlFor="description"
      >
        Description:
      </label>
      <textarea
        style={{ ...commonStyles, height: "100px" }}
        id="description"
        name="description"
        rows="4"
        cols="50"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      ></textarea>

      <label style={labelStyle} htmlFor="skills">
        Skills:
      </label>
      {skillsArray.map((skill, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`skill-${index}`}
            name={skill}
            value={skill}
            onChange={handleMultiSelect}
          />
          <label htmlFor={`skill-${index}`}>{skill}</label>
        </div>
      ))}

      <div style={{display:"flex", justifyContent:"flex-end", marginTop:"20px"}}>
        <button onClick={submittedForm1} type="submit">Next</button>
      </div>
    </div>
  );
};

export default Form1;
