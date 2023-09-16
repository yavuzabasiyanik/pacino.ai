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


const Form1 = ({nextStep, prevStep}:{
    nextStep: any
    prevStep: any
}) => {
  const [formValues, setFormValues] = useFormContext()

  const skillsArray = ["JavaScript", "Python", "Java", "C++", "React"];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleMultiSelect = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      skills: formValues.skills.includes(value)
        ? formValues.skills.filter((skill) => skill !== value)
        : [...formValues.skills, value],
    });
  };

  const submittedForm1 = (e:any) => {
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
        Medium Text:
      </label>
      <input
        style={commonStyles}
        type="text"
        id="mediumText"
        name="mediumText"
        value={formValues.mediumText}
        onChange={handleChange}
      />

      <label style={labelStyle} htmlFor="select1">
        Workplace Type
      </label>
      <select
        style={inputStyle}
        name="select1"
        id="select1"
        onChange={handleChange}
      >
        <option value="">--Workplace Type--</option>
        <option value="On-Site">On-Site</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Remote">Remote</option>
      </select>

      <label style={labelStyle} htmlFor="select2">
        Job Type
      </label>
      <select
        style={inputStyle}
        name="select2"
        id="select2"
        onChange={handleChange}
      >
        <option value="">--Job Type--</option>
        <option value="option1">Full-time</option>
        <option value="option2">Part-Time</option>
        <option value="option2">Contract</option>
        <option value="option2">Temporary</option>
        <option value="option2">Intership</option>
      </select>

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
        value={formValues.description}
        onChange={handleChange}
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
        <button onClick={submittedForm1} type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Form1;
